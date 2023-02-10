import './TripList.scss';
import testJSON from '../../test.json';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import PopupSort from './ListComponent/PopupSort/PopupSort';
import NormalSort from './ListComponent/NormalSort/NormalSort';
import ProductsCard from './ListComponent/ProductsCard/ProductsCard';
// import Pagination from './ListComponent/Pagination/Pagination';
import ListMap from '../layouts/ListMap/ListMap';
import TripSearchBar from './ListComponent/TripSearchBar/TripSearchBar';
// import { useParams } from 'react-router-dom';

export default function TestList() {
  //! state :訪問網頁時的關鍵字、篩選條件、商品收藏
  //! 第一次渲染拿資料，接下來除非更動搜尋BAR(地名、關鍵字)，不會發requset
  //TODO 加上排序條件、更新收藏資料庫、製作分業、加上地圖
  //TODO 將從API調出的資料傳進去產品卡片

  //利用 react-router-dom 獲得一開始的關鍵字 或著其他方式 很有可能是localstorage
  // const { URLRawkeyword } = useParams();
  const URLRawkeyword = '台北';

  const [newRawKeyword, setNewRawKeyword] = useState();

  //將回傳資料設為本元件的state
  const [ReturnedTripData, setReturnedTripData] = useState([]);

  //打算把子元件的state當作"篩選用"的關鍵字
  // const [SortKeywordArr, setSortKeywordArr] = useState();

  //!處理關鍵字的函式

  function makeRawKeywordsAnArr(URLRawkeyword) {
    const URLRawKeywordArr = URLRawkeyword.split(' ');
    console.log('生成未分類關鍵字陣列', URLRawKeywordArr);
    return URLRawKeywordArr;
  }
  function seperateRawKeywordArr(URLRawKeywordArr, isRegion) {
    const name = [];
    const region = [];
    URLRawKeywordArr.forEach((element) => {
      if (isRegion(element)) {
        region.push(element);
      } else {
        name.push(element);
      }
    });
    return [name, region];
  }

  function isRegion(element) {
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
    if (regionArr.includes(element)) {
      return true;
    } else {
      return false;
    }
  }

  // //!藉由關鍵字獲取資料的函式

  async function fetchData(regionKeywordArr, nameKeywordArr) {
    const regionKeyword =
      regionKeywordArr[0] !== undefined ? regionKeywordArr[0] : 'none';
    const nameKeyword =
      nameKeywordArr[0] !== undefined ? nameKeywordArr.join('&') : 'none';
    try {
      if (
        URLRawkeyword !== 'all' &&
        (regionKeywordArr[0] || nameKeywordArr[0])
      ) {
        const dataArr = await axios.get(
          `http://localhost:3001/api/tripList/r=${regionKeyword}+n=${nameKeyword}`
        );
        setReturnedTripData(dataArr.data);
      } else if (URLRawkeyword === 'all') {
        const dataArr = await axios.get(
          `http://localhost:3001/api/tripList/all`
        );
        setReturnedTripData(dataArr.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // //!渲染從搜尋關鍵字獲取的資料
  const RenderReturnedTripData = ReturnedTripData.map((e, i) => {
    return (
      <ProductsCard
        key={i}
        tripName={e.trip_name}
        introduction={e.introduction}
        region={e.region}
      />
    );
  });

  console.log(testJSON.Info);
  const TestArr = testJSON.Info;


  const RenderTestJSON = TestArr.map((e, i) => {
    return (
      <>
        <p>{e.Id}</p>
      </>
    );
  });

  // json parse 讓字串變成JSON stringift反之

  //! 沒結果時 先凍結
  // const ThereIsNoReturnedTripData = () => {
  //   return (
  //     <>
  //       <div className="container-fluid d-flex justify-content-center align-items-center my-topic">
  //         查無結果
  //       </div>
  //     </>
  //   );
  // };

  //! fetch 資料庫 先凍結
  // useEffect(() => {
  //   const [nameKeywordArr, regionKeywordArr] = seperateRawKeywordArr(
  //     makeRawKeywordsAnArr(URLRawkeyword),
  //     isRegion
  //   );
  //   fetchData(regionKeywordArr, nameKeywordArr);
  // }, []);

  // console.log(ReturnedTripData);

  //建立 篩選條件的 State
  // const [filterForData, setFilterForData] = useState({
  //   eventFeature: [],
  //   MaxPrice: 0,
  //   MinPrice: Number.MAX_SAFE_INTEGER,
  // });

  //! filter 先凍結
  // useEffect(() => {
  //   console.log(filterForData);
  // }, [filterForData]);

  return (
    <>
      <TripSearchBar setNewRawKeyword={setNewRawKeyword} />
      <div className="page-wrapper container-xl">
        <div className="result-sort d-flex justify-content-between align-items-end">
          <p className="result my-topic">
            關鍵字：共 {ReturnedTripData ? ReturnedTripData.length : 0} 項 結果
          </p>
          <ul className="top-sort-list list-unstyled d-flex my-p">
            <li className="top-sort-btn">排序：</li>
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
                  <h5 className="filter-box-title nav-foot">目的地</h5>
                  {/* <PopupSort
                    label="北部"
                    area="northern"
                    setNewRawKeyword={setNewRawKeyword}
                  />
                  <PopupSort
                    label="中部"
                    area="central"
                    setNewRawKeyword={setNewRawKeyword}
                  />
                  <PopupSort
                    label="南部"
                    area="southern"
                    setNewRawKeyword={setNewRawKeyword}
                  />
                  <PopupSort
                    label="東部"
                    area="eastern"
                    setNewRawKeyword={setNewRawKeyword}
                  />
                  <PopupSort
                    label="離島"
                    area="island"
                    setNewRawKeyword={setNewRawKeyword}
                  /> */}
                </div>
                <div className="filter-box px-5 py-3">
                  <h5 className="filter-box-title nav-foot">活動特色</h5>
                  <NormalSort label="人文歷史" id="culture-history" />
                  <NormalSort label="娛樂享受" id="amusement" />
                  <NormalSort label="登山踏青" id="meal" />
                  <NormalSort label="戲水活動" id="in_water" />
                  <NormalSort label="雪上活動" id="snow" />
                </div>
              </div>
              <div className="filter-container my-border-radius m-auto mt-3">
                <div className="filter-box px-5 py-3">
                  <h5 className="filter-box-title nav-foot">價格</h5>
                  <NormalSort label="0 - 2000" id="overZero" />
                  <NormalSort label="2001 - 4000" id="overTwoK" />
                  <NormalSort label="4001 - 6000" id="overFourK" />
                  <NormalSort label="6001 - 8000" id="overSixK" />
                  <NormalSort label="8001 - 10000" id="overEightK" />
                  <NormalSort label="10001 以上" id="overTenK" />
                </div>
              </div>
              <div className="filter-container my-border-radius m-auto mt-3">
                <div className="filter-box px-5 py-3">
                  <h5 className="filter-box-title nav-foot">其他</h5>
                  <NormalSort label="無購物行程" id="no_shopping" />
                  <NormalSort label="供餐" id="meal" />
                  <NormalSort label="自助旅行" id="self_trip" />
                  <NormalSort label="導遊帶隊" id="guide_trip" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 ">
            {/* {ReturnedTripData
              ? RenderReturnedTripData
              : ThereIsNoReturnedTripData()}
            <Pagination /> */}
            {RenderTestJSON}
          </div>
        </div>
      </div>
    </>
  );
}
