import './TestList.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PopupSort from './ListComponent/PopupSort/PopupSort';
import NormalSort from './ListComponent/NormalSort/NormalSort';
import ProductsCard from './ListComponent/ProductsCard/ProductsCard';
import Pagination from './ListComponent/Pagination/Pagination';
import ListMap from '../layouts/ListMap/ListMap';
import { useParams, useNavigate } from 'react-router-dom';

export default function TestList() {
  //將回傳資料設為本元件的state
  const [ReturnedTripArr, setTripArr] = useState([]);

  //利用 react-router-dom 獲得一開始的關鍵字
  const { FirstURLkeyword } = useParams();

  //打算把子元件的state當作新關鍵字
  const [stateKeyword, setStateKeyword] = useState([{ FirstURLkeyword }]);

  //從關鍵字獲取資料
  useEffect(() => {
    async function getData() {
      try {
        switch (FirstURLkeyword) {
          case 'all':
            const Allresult = await axios.get(
              `http://localhost:3001/api/tripList/all`
            );
            setTripArr(Allresult.data);
            break;
          default:
            const result = await axios.get(
              `http://localhost:3001/api/tripList/${FirstURLkeyword}`
            );
            setTripArr(result.data);
        }
      } catch (error) {
        console.log(error);
      }
      console.log(ReturnedTripArr);
    }
    getData();
  }, [stateKeyword]);

  //從關鍵字獲取地理資訊

  return (
    <>
      <div className="page-wrapper container-xl">
        <div className="result-sort d-flex justify-content-between align-items-end">
          <p className="result my-topic">
            關鍵字：共 {ReturnedTripArr.length} 項 結果{' '}
          </p>
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
          </ul>
        </div>
        <div className="row mb-5">
          <div className="col-3 px-3">
            <ListMap />
            <div className="filter-wrapper mx-auto">
              <div className="filter-container my-border-radius m-auto mt-3">
                <div className="filter-box px-5 py-3">
                  <h5 className="filter-box-title nav-foot">所在地</h5>
                  <PopupSort label="南部" area="southern" />
                </div>
                <div className="filter-box px-5 py-3">
                  <h5 className="filter-box-title nav-foot">類型</h5>
                  <NormalSort label="歡迎寵物" />
                </div>
              </div>
              <div className="filter-container my-border-radius m-auto mt-3">
                <div className="filter-box px-5 py-3">
                  <h5 className="filter-box-title nav-foot">價格</h5>
                  <NormalSort label="0 - 2000" />
                  <NormalSort label="2000 - 4000" />
                </div>
              </div>
              <div className="filter-container my-border-radius m-auto mt-3">
                <div className="filter-box px-5 py-3">
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
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}
