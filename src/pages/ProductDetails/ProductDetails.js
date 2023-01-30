import './ProductDetails.scss';
import ProductPictures from './DetailComponet/ProductPictures/ProductPictures';
import SummaryNav from './DetailComponet/SummaryNav/SummaryNav';
import ListMap from '../layouts/ListMap/ListMap';
import MainSelector from './DetailComponet/MainSelector/MainSelector';
// import Comment from './DetailComponet/Comment/Comment';

export default function ProductDetail() {
  /*從ProductList取得產品資料物件 'ProductObj' 解構為
        1.Name 2.Service 3.Address 4.Description 5.GeoX, GeoY 6.Grades, GAmount
    */
  /*從PlanList 'PlanObj'取得方案資料 解構為
        1.PlanName 2.StartDate,EndDate 3.AduAmount,KidAmount,EldAmount,AduPrice,KidPrice,EldPrice 4.LaunchTime 5.PlanDescription 
      
   */
  /*從訂單資料庫取得資料 'OrderObj' (用產品ID)，再解構為
        1.PaidAmountA, PaidAmountK, PaidAmountE, PaidAmountF ,PaidAmountS ,PaidAmountT 2.PreservedDate (訂哪一天) 3.PLaunchTime
    */
  /*從評論資料庫取得資料 'CommentObj'，再解構為
        1.CommentGuest 2.GuestName 3.CommentTime 4.CommentGrade 5.CommentContent 6.CommentPicture
   */
  // 取得今天日期 Today

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
          <MainSelector ProductObj={ProductObj} />
        </div>
        <div className="product-description collapsable-block">
          <div className="collapse-controll d-flex justify-content-between">
            <h3 className="box-title title-underline">活動介紹</h3>
            <a>
              <span className="material-symbols-outlined show-btn">
                change_history
              </span>
            </a>
          </div>
        </div>
        <div className="product-map collapsable-block">
          <div className="collapse-controll d-flex justify-content-between">
            <h3 className="box-title title-underline">地圖</h3>
            <a>
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
            <a>
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
