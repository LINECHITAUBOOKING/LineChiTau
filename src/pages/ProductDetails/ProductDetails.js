import './ProductDetails.scss'
import ProductPictures from './DetailComponet/ProductPictures/ProductPictures';
import SummaryNav from './DetailComponet/SummaryNav/SummaryNav';
import ListMap from '../layouts/ListMap/ListMap';
// import Comment from './DetailComponet/Comment/Comment';

export default function ProductDetail() {

    /*從ProductList取得產品資料 解構為
        1.Name 2.Service 3.Address 4.Description 5.GeoX, GeoY 6.Grades, GAmount
    */
   /*從PlanList 取得方案資料 解構為
        1.PlanName 2.StartDate,EndDate 3.AduAmount,KidAmount,EldAmount,AduPrice,KidPrice,EldPrice 4.LaunchTime
   */
    /*從訂單資料庫取得資料 (用產品ID)，再解構為
        1.PaidAmountA, PaidAmountK, PaidAmountE 2.PreservedDate (訂哪一天) 3.PLaunchTime
    */
    /*從評論資料庫取得資料，再解構為
        1.CommentGuest 2.GuestName 3.CommentTime 4.CommentGrade 5.CommentContent 6.CommentPicture
   */
   // 取得今天日期 Today
    
    
    return (
        <>  
            <div className='container-xxl' style={{backgroundColor : 'white'}}>
                <ProductPictures />
                <div className="row mt-4">
                    <div className="col-8 d-flex flex-column justify-content-between">
                        <SummaryNav listItems={['行程介紹','地圖','評論區','注意事項']}/>
                        <h3>九份＆十分＆野柳一日遊{'Name'}</h3>
                        <div className='d-flex'>
                            {/* {Service.map((v)=>{<div className="service-tag">{v}</div>})} */}
                            <div className='service'>中/英文導覽</div>
                            <div className='service'>中/英文導覽</div>
                            <div className='service'>中/英文導覽</div>
                            <div className='service'>中/英文導覽</div>
                            <div className='service'>中/英文導覽</div>
                        </div>
                        {/* <p className='my-p'><span className='material-symbols-outlined'>location_on</>{Address}</p> */}
                        <p className='my-p'><span className='material-symbols-outlined address'>location_on</span>香港九龍尖沙咀東部科學館道二號香港科學館</p>
                    </div>

                    <div className="col-4">
                        <ListMap maxWidth={420} height={215}/>
                    </div>    
                </div>
            </div>
            {/* border: '2px solid red' */}
            <div className='container-xxl' style={{backgroundColor : 'white',}}>
                <div className='mt-3 d-flex justify-content-between'>
                    <div className='main-selector'>
                        <div className='title-and-clear-btn d-flex justify-content-between'>
                            <h3 className='title-underline box-title'>選擇日期及方案</h3>
                            <div className='round-btn'>清除全部</div>
                        </div>
                        <p className='my-p'>請選擇參加日期</p>
                        <div className='time-selector-wrapper d-flex'>
                            <div className='preserved-date round-btn d-flex align-content-center justify-content-between'>
                                2022/12/29<span className='material-symbols-outlined show-btn my-p'>change_history</span>
                            </div>
                            <div className='preserved-time round-btn d-flex align-content-center justify-content-between'>
                                14:30<span className='material-symbols-outlined show-btn my-p'>change_history</span>
                            </div>
                        </div>
                        <p className='my-p'>請選擇方案類型</p>
                            <div className='plan-wrapper d-flex flew-wrap'>
                                <div className='round-btn'>一日遊：十分＆夜九份</div>
                                <div className='round-btn'>一日遊：十分＆九份</div>
                                <div className='round-btn'>一日遊：野柳＆黃金瀑布</div>
                            </div>
                        <p className='my-p'>人數</p>
                        <div className='preserved-amount-wrapper d-flex flex-wrap'>
                            <div className='preserved-amount adult d-flex justify-content-between'>成人
                                <div className='control-wrapper d-flex'>
                                    <span className='material-symbols-outlined'>add_circle</span>1<span className='material-symbols-outlined'>do_not_disturb_on</span>
                                </div>
                            </div>
                            <div className='preserved-amount kiddo d-flex justify-content-between'>兒童
                                    <div className='control-wrapper d-flex'>
                                        <span className='material-symbols-outlined'>add_circle</span>1<span className='material-symbols-outlined'>do_not_disturb_on</span>
                                    </div>
                            </div>
                            <div className='preserved-amount elder d-flex justify-content-between'>長者
                                    <div className='control-wrapper d-flex'>
                                        <span className='material-symbols-outlined'>add_circle</span>1<span className='material-symbols-outlined'>do_not_disturb_on</span>
                                    </div>                    
                            </div>
                        </div>
                        <div className='final-total my-topic d-flex justify-content-between'>NT$ 2400
                            <div className='cart-and-buy d-flex justify-content-evenly'>
                                <div className='do-cart round-btn my-p d-flex align-items-center'>放入購物車</div>
                                <div className='do-buy round-btn my-p d-flex align-items-center'>立即下單</div>
                            </div>
                        </div>
                    </div>
                    <div className='plan-details'>
                        <div className='details-wrapper d-flex flex-column'>
                            <div className='details-container my-heading d-flex align-content-center justify-content-between'>
                                方案詳情 <span className='material-symbols-outlined show-btn'>change_history</span>
                            </div>
                            <div className='collapse-details'>12345</div>
                            <div className='details-container my-heading d-flex align-content-center justify-content-between'>
                                服務條款 <span className='material-symbols-outlined show-btn'>change_history</span>
                            </div>
                            <div className='collapse-details'>12345</div>
                            <div className='details-container my-heading d-flex align-content-center justify-content-between'>
                                如何使用 <span className='material-symbols-outlined show-btn'>change_history</span>
                            </div>
                            <div className='collapse-details'>12345</div>
                        </div>
                    </div>
                </div>
                <div className='product-description collapsable-block'>
                        <div className='collapse-controll d-flex justify-content-between'>
                            <h3 className='box-title title-underline'>活動介紹</h3>
                            <a><span className='material-symbols-outlined show-btn'>change_history</span></a>
                        </div>
                    </div>
                    <div className='product-map collapsable-block'>
                        <div className='collapse-controll d-flex justify-content-between'>
                            <h3 className='box-title title-underline'>地圖</h3>
                            <a><span className='material-symbols-outlined show-btn'>change_history</span></a>
                        </div>
                    </div>
                    <div className='product-grade'></div>
                    <div className='product-comment'></div>
                    <div className='product-recommended collapsable-block'>
                        <div className='collapse-controll d-flex justify-content-between'>
                            <h3 className='box-title title-underline'>你可能也喜歡</h3>
                            <a><span className='material-symbols-outlined show-btn'>change_history</span></a>
                        </div>
                    </div>
            </div>
            {/* <Comment /> */}
        </>
    )
}