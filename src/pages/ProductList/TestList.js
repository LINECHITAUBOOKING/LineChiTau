import './TestList.scss';
import PopupSort from '../ProductList/PopupSort/PopupSort';
import NormalSort from '../ProductList/NormalSort/NormalSort';
import ProductsCard from '../ProductList/ProductsCard/ProductsCard';
import ListMap from './ListMap/ListMap';

const TestList = () => {
  return (
    <>
      <div className="hotellist-box container-xl">
        <div className="result-sort d-flex justify-content-between align-items-end">
          <p className="result my-topic">關鍵字：共 123456 項 結果 </p>
          <ul className="top-sort-list list-unstyled d-flex my-p">
            <li className="top-sort-btn">排序：</li>
            <li className="top-sort-btn popularity">人氣 </li>
            <li className="top-sort-btn grades">評價</li>
            <li className="top-sort-btn price">
              價格
              <span className="arrow material-symbols-outlined">
                keyboard_arrow_up
              </span>
            </li>
            {/* <li>
              價格
              <span className="arrow material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </li> */}
          </ul>
        </div>
        <div className="row mb-5">
          <div className="col-3 px-3">
            <ListMap />
            <div className="filter-box">
              <div className="my-border-radius location-type-box m-auto mt-3">
                <div className="px-5 py-3 form-check">
                  <h5 className="filter-box-title nav-foot">所在地</h5>
                  <PopupSort label="南部" area="southern" />
                </div>
                <div className="px-5 py-3 form-check">
                  <h5 className="filter-box-title nav-foot">類型</h5>
                  <NormalSort label="歡迎寵物" />
                </div>
              </div>
              <div className="my-border-radius location-type-box m-auto mt-3">
                <div className="px-5 py-3 form-check">
                  <h5 className="filter-box-title nav-foot">價格</h5>
                  <NormalSort label="0 - 2000" />
                  <NormalSort label="2000 - 4000" />
                </div>
              </div>
              <div className="my-border-radius location-type-box m-auto mt-3">
                <div className="px-5 py-3 form-check">
                  <h5 className="filter-box-title nav-foot">供餐</h5>
                  <NormalSort label="自炊" />
                  <NormalSort label="含早餐" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 ">
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <div className="pagination-wrapper">
              <ul className="pagination-container list-unstyled d-flex">
                <li className="pagination-border px-2 my-p px-2 d-flex justify-content-center previous">
                  <span class="material-symbols-outlined pagination-arrow">
                    navigate_before
                  </span>
                </li>
                <li className="pagination-border px-2 my-p px-2">
                  <a href="/">1</a>
                </li>
                <li className="pagination-border px-2 my-p px-2">
                  <a href="/">2</a>
                </li>
                <li className="pagination-border px-2 my-p px-2">
                  <a href="/">3</a>
                </li>
                <li className="pagination-border px-2 my-p px-2 d-flex justify-content-center next">
                  <span class="material-symbols-outlined pagination-arrow">
                    navigate_next
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestList;
