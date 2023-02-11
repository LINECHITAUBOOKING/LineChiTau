import './TripProductDetails.scss';
import ProductPictures from './DetailComponet/ProductPictures/ProductPictures';
import SummaryNav from './DetailComponet/SummaryNav/SummaryNav';
import ListMap from '../layouts/ListMap/ListMap';
import MainSelector from './DetailComponet/MainSelector/MainSelector';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import Comment from './DetailComponet/Comment/Comment';

export default function TripProductDetail() {
  //?把在ProductList頁面fetch到的資料，傳進本Deatail頁面
  //! 在本頁重新fetch

  //! state:1.現在正在瀏覽的方案 2.fetch 產品取得的資料 3. fetch 訂單取得的資料

  const [viewingPlan, setViewingPlan] = useState();
  const [ReturnedData, setReturnedData] = useState();
  // const [ReturnedPlanData, setReturnedPlanData] = useState();
  // const [ReturnedContractData, setReturnedContractData] = useState();

  //! fetch會用到的變數
  const { URLkeyword } = useParams();
  // const nowDate = new Date();

  //! fetch 用的含式
  async function fetchData() {
    try {
      const dataArr = await axios.get(
        `http://localhost:3001/api/tripProductDetails/${URLkeyword}`
      );
      setReturnedData(dataArr);
    } catch (error) {
      console.log(error);
    }
  }

  //! 使用fetchData
  // useEffect(() => {
  //   fetchData();
  // }, [ReturnedData]);
  useEffect(() => {
    fetchData();
  }, []);

  console.log(ReturnedData);
  //  查看訂單有多少筆
  // async function fetchContractData(productID, nowDate) {
  //   try {
  //     const contractDataArr = await axios.get(
  //       `http://localhost:3001/api/tripContract/t=x${productID}&d=x${nowDate}`
  //     );
  //     setReturnedTripContractData(contractDataArr);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  //! 用 useEffect拿資料

  //! 解構拿出來的資料

  //取得產品資料 解構為 1.Name 2.Service 3.Address 4.Description 5.GeoX, GeoY 6.Grades, GAmount
  //1.PlanName 2.StartDate,EndDate 3.AduAmount,KidAmount,EldAmount,AduPrice,KidPrice,EldPrice 4.LaunchTime 5.PlanDescription
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
            <SummaryNav
              listItems={['行程介紹', '地圖', '評論區', '注意事項']}
            />
            <h3>九份＆十分＆野柳一日遊{'Name'}</h3>
            <div className="d-flex">
              {/* {Service.map((v)=>{<div className="service-tag">{v}</div>})} */}
              <div className="service">中/英文導覽</div>
              <div className="service">中/英文導覽</div>
              <div className="service">中/英文導覽</div>
              <div className="service">中/英文導覽</div>
              <div className="service">中/英文導覽</div>
            </div>
            {/* <p className='my-p'><span className='material-symbols-outlined'>location_on</>{Address}</p> */}
            <p className="my-p">
              <span className="material-symbols-outlined address">
                location_on
              </span>
              香港九龍尖沙咀東部科學館道二號香港科學館
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
          <MainSelector />
        </div>
        <div className="product-description collapsable-block">
          <div className="collapse-controll d-flex justify-content-between">
            <h3 className="box-title title-underline">活動介紹</h3>
            <a href="./">
              <span className="material-symbols-outlined show-btn">
                change_history
              </span>
            </a>
          </div>
        </div>
        <div className="product-map collapsable-block">
          <div className="collapse-controll d-flex justify-content-between">
            <h3 className="box-title title-underline">地圖</h3>
            <a href="./">
              <span className="material-symbols-outlined show-btn">
                change_history
              </span>
            </a>
          </div>
        </div>
        <div className="product-grade"></div>
        <div className="product-comment"></div>
        <div className="product-recommended collapsable-block">
          <div className="collapse-controll d-flex justify-content-between">
            <h3 className="box-title title-underline">你可能也喜歡</h3>
            <a href="./">
              <span className="material-symbols-outlined show-btn">
                change_history
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* <Comment /> */}
    </>
  );
}
