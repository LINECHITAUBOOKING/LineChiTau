import './TripProductDetails.scss';
import ProductPictures from './DetailComponet/ProductPictures/ProductPictures';
import SummaryNav from './DetailComponet/SummaryNav/SummaryNav';
import ListMap from '../layouts/ListMap/ListMap';
import MainSelector from './DetailComponet/MainSelector/MainSelector';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TripIntro from './DetailComponet/TripIntro/TripIntro';
// import TripRecommend from './DetailComponet/TripRecommend/TripRecommend';
// import Comment from './DetailComponet/Comment/Comment';

export default function TripProductDetail() {
  //! state: 1.fetch 產品取得的資料 2. fetch 訂單取得的資料
  const [returnedData, setReturnedData] = useState({
    tripData: [],
    planData: [],
  });

  // const [ReturnedContractData, setReturnedContractData] = useState();

  //! fetch會用到的變數
  const { URLkeyword } = useParams();
  // const nowDate = new Date();

  //! fetch 用的含式
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

  //! 使用fetchData
  useEffect(() => {
    fetchData();
  }, []);
  //! 在tripData的物件資料上加上service屬性
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
  // console.log(newTripData);
  // console.log(newTripData[0]);

  //取得產品資料 解構為 1.Name 2.Service 3.Address 4.Description 5.GeoX, GeoY 6.Grades, GAmount
  //1.PlanName 2.StartDate,EndDate 3.AduAmount,KidAmount,EldAmount,AduPrice,KidPrice,EldPrice 4.LaunchTime 5.PlanDescription
  const {
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
  } = newTripData[0];

  // 從訂單資料庫取得資料 (用產品ID)，再解構為
  // 1.PaidAmountA, PaidAmountK, PaidAmountE, PaidAmountF ,PaidAmountS ,PaidAmountT 2.PreservedDate (訂哪一天) 3.PLaunchTime
  // 從評論資料庫取得資料 再解構為
  // 1.CommentGuest 2.GuestName 3.CommentTime 4.CommentGrade 5.CommentContent 6.CommentPicture
  return (
    <>
      <div className="container-xxl" style={{ backgroundColor: 'white' }}>
        <ProductPictures />
        <div className="row mt-4">
          <div className="col-8 d-flex flex-column justify-content-between">
            <SummaryNav listItems={['行程介紹', '地圖', '評論區']} />
            <h3>{trip_name}</h3>
            <div className="d-flex">
              {service.map((v) => (
                <div className="service">{v}</div>
              ))}
            </div>
            <p className="my-p d-flex align-items-center">
              <span className="material-symbols-outlined address">
                location_on
              </span>
              {address}
            </p>
          </div>

          <div className="col-4">
            <ListMap maxWidth={420} height={215} />
          </div>
        </div>
      </div>
      {/* border: '2px solid red' */}
      <div className="container-xxl" style={{ backgroundColor: 'white' }}>
        <div className="mt-3 d-flex justify-content-between">
          <MainSelector planData={returnedData.planData} />
        </div>
        <TripIntro />
        {/* <TripMap /> */}
        {/* <Comment/> */}
        {/* <TripRecommend/> */}
      </div>
    </>
  );
}
