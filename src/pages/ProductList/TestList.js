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
  //需要用到的state 1.訪問網頁時的關鍵字 2.關鍵字以外額外的篩選條件 3.產品收藏需要的state 4.產品資料傳給productCard
  //(在關鍵字不變的情況下，加上篩選條件，並即時渲染),(收藏state產生變化→更新資料庫)
  //首先要依據關鍵字的不同，做第一次的搜尋
  //再依據state的增加，做二次的搜尋

  //利用 react-router-dom 獲得一開始的關鍵字
  const { URLkeyword } = useParams();

  //將回傳資料設為本元件的state
  const [ReturnedTripDataArr, setTripDataArr] = useState([]);

  //打算把子元件的state當作新關鍵字
  const [stateKeyword, setStateKeyword] = useState([]);

  //從關鍵字獲取資料
  useEffect(() => {
    async function getTripData() {
      const regionArr = [
        '基隆',
        '宜蘭',
        '台北',
        '桃園',
        '新竹',
        '苗栗',
        '台中',
        '彰化',
        '南投',
        '雲林',
        '嘉義',
        '台南',
        '高雄',
        '屏東',
        '台東',
        '花蓮',
        '澎湖',
        '金門',
        '馬祖',
        '蘭嶼',
      ];
      const URLkeywordArr = URLkeyword.split(' ');
      const gotRegionKeywordArr = URLkeywordArr.filter((item) => {
        regionArr.includes(item);
      });

      try {
        if (URLkeyword === 'all') {
          const allResult = await axios.get(
            `http://localhost:3001/api/tripList/all`
          );
          setTripDataArr(allResult.data);
        } else if (gotRegionKeywordArr[0]) {
          const regionKeyword = gotRegionKeywordArr[0];
          const regionResult = await axios.get(
            `http://localhost:3001/api/tripList/r=${regionKeyword}`
          );
          setTripDataArr(regionResult.data);
        } else {
          const result = await axios.get(
            `http://localhost:3001/api/tripList/k=${URLkeyword}`
          );
          setTripDataArr(result.data);
        }
        switch (URLkeyword) {
          case 'all':
            const Allresult = await axios.get(
              `http://localhost:3001/api/tripList/all`
            );
            setTripDataArr(Allresult.data);
            break;
          default:
            const result = await axios.get(
              `http://localhost:3001/api/tripList/${URLkeyword}`
            );
            setTripDataArr(result.data);
        }
      } catch (error) {
        console.log(error);
      }
      console.log(ReturnedTripDataArr);
    }
    getTripData();
  });

  //從關鍵字獲取地理資訊

  return (
    <>
      <div className="page-wrapper container-xl">
        <div className="result-sort d-flex justify-content-between align-items-end">
          <p className="result my-topic">
            關鍵字：共 {ReturnedTripDataArr.length} 項 結果{' '}
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
