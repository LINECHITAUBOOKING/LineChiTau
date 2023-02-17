import './TripProductDetails.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ProductPictures from './DetailComponet/ProductPictures/ProductPictures';
import SummaryNav from './DetailComponet/SummaryNav/SummaryNav';
import ListMap from '../layouts/ListMap/ListMap';
import MainSelector from './DetailComponet/MainSelector/MainSelector';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TripIntro from './DetailComponet/TripIntro/TripIntro';
// import { add } from 'date-fns';
// import TripRecommend from './DetailComponet/TripRecommend/TripRecommend';
// import Comment from './DetailComponet/Comment/Comment';

export default function TripProductDetail() {
  //! 地圖的bookmark
  let DefaultIcon = L.icon({
    iconUrl: icon,
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  //! top level state
  const [returnedData, setReturnedData] = useState({
    tripData: [],
    planData: [],
  });
  const [tripId, setTripID] = useState();
  const [tripName, setTripName] = useState();
  const [serviceArr, setServiceArr] = useState();
  const [address, setAddress] = useState();
  const [introduction, setIntroduction] = useState();
  const [introPic, setIntroPic] = useState();
  const [picIntro, setPicIntro] = useState();
  const [allPic, setAllPic] = useState();
  const [geoLocationX, setGeoLocationX] = useState();
  const [geoLocationY, setGeoLocationY] = useState();
  const [region, setRegion] = useState();
  const [grade, setGrade] = useState();
  const [cartPic, setCartPic] = useState();

  //! fetch會用到的變數
  const { URLkeyword } = useParams();

  //! 使用fetchData
  useEffect(() => {
    async function fetchData() {
      try {
        const returnedTripData = await axios.get(
          `http://localhost:3001/api/tripProductDetails/${URLkeyword}`
        );
        const returnedPlanData = await axios.get(
          `http://localhost:3001/api/tripProductDetails/${URLkeyword}/plans`
        );
        setReturnedData({
          tripData: returnedTripData.data,
          planData: returnedPlanData.data,
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  //! 在tripData的物件資料上加上service屬性
  useEffect(() => {
    const rawTripDataArr = returnedData.tripData;
    const newTripData = rawTripDataArr.map((item) => {
      const {
        culture_history,
        amusement,
        meal,
        no_shopping,
        self_trip,
        guide_trip,
        mountain,
        in_water,
        snow,
      } = item;
      const ItemServiceList = [
        { service: '人文歷史', value: culture_history },
        { service: '娛樂享受', value: amusement },
        { service: '供餐', value: meal },
        { service: '無購物行程', value: no_shopping },
        { service: '自助旅行', value: self_trip },
        { service: '導遊帶隊', value: guide_trip },
        { service: '登山踏青', value: mountain },
        { service: '水上活動', value: in_water },
        { service: '雪上活動', value: snow },
      ];
      const ItemActualService = ItemServiceList.filter((v) => {
        return v.value !== 0;
      }).map((v) => {
        return v.service;
      });
      item.service = ItemActualService;
      return item;
    });
    const newTripDataObj = newTripData[0];
    const planDataArr = returnedData.planData;
    const defaultPlanData = planDataArr[0];
    if (newTripDataObj && defaultPlanData) {
      const {
        trip_id,
        trip_name,
        service,
        address,
        introduction,
        intro_pic,
        pic_intro,
        all_pic,
        geo_locationX,
        geo_locationY,
        region,
        comment_amount,
        comment_grade,
      } = newTripDataObj;

      const stringIntro = JSON.parse(introduction).introduction;
      const allPicArr = all_pic.split(',');
      const picForCart = allPicArr[0];

      setTripID(trip_id);
      setTripName(trip_name);
      setServiceArr(service);
      setAddress(address);
      setIntroduction(stringIntro);
      setIntroPic(intro_pic);
      setPicIntro(pic_intro);
      setAllPic(allPicArr);
      setGeoLocationX(geo_locationX);
      setGeoLocationY(geo_locationY);
      setRegion(region);
      setGrade(comment_grade / comment_amount);
      setCartPic(picForCart);
    }
  }, [returnedData]);

  return (
    <>
      <div className="container-xxl" style={{ backgroundColor: 'white' }}>
        <ProductPictures allPicArr={allPic} />
        <div className="row mt-4">
          <div className="col-8 d-flex flex-column justify-content-between">
            <SummaryNav listItems={['行程介紹', '地圖', '評論區']} />
            <h3>{tripName === undefined ? 0 : tripName}</h3>
            <div className="d-flex">
              {serviceArr === undefined
                ? 0
                : serviceArr.map((v) => {
                    return (
                      <>
                        <div className="service">{v}</div>
                      </>
                    );
                  })}
            </div>
            <p className="my-p d-flex align-items-center">
              <span className="material-symbols-outlined address">
                location_on
              </span>
              {address === undefined ? 0 : address}
            </p>
          </div>

          <div className="col-4">
            {geoLocationY && (
              <MapContainer
                center={[geoLocationY, geoLocationX]}
                zoom={10}
                scrollWheelZoom={false}
                style={{ height: '250px' }}
                className="leaflet-hotel-list"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[geoLocationY, geoLocationX]} key={tripName}>
                  <Popup>{tripName}</Popup>
                </Marker>
              </MapContainer>
            )}
          </div>
        </div>
      </div>
      <div className="container-xxl" style={{ backgroundColor: 'white' }}>
        <div className="mt-3 d-flex justify-content-between">
          {returnedData.planData === undefined ? (
            0
          ) : (
            <MainSelector
              planData={returnedData.planData}
              tripId={tripId}
              tripName={tripName}
              cartPic={cartPic}
            />
          )}
        </div>
        <TripIntro
          tripIntroduction={introduction}
          introPic={introPic ? introPic : '1,2'}
          picIntro={picIntro ? introPic : '1,2'}
        />
        {/* <TripMap /> */}
        {/* <Comment/> */}
        {/* <TripRecommend/> */}
      </div>
    </>
  );
}
