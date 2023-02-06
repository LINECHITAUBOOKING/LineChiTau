import './TripSearchBar.scss';
import { useState } from 'react';

export default function SearchBar({ setNewRawKeyword }) {
  // TODO 設定State
  //! State 用來區分 輸入內容 和 placeholder 兩種狀態

  const [isClientInputed, JudgeTheInput] = useState(false);
  const inputStatus = isClientInputed ? 'to-input' : 'still-no-input';
  console.log(inputStatus);

  // TODO 不提供自動完成功能，將輸入內容用LIST的state setter傳回去

  return (
    <>
      <div className="trip-search-bar-wrapper d-flex align-items-center">
        <h1 className="seach-hint my-heading d-flex justify-content-evenly align-items-center">
          <span className="material-symbols-outlined location location-icon d-flex justify-content-center align-items-center">
            location_on
          </span>
          {isClientInputed ? 'none' : '目的地'}
        </h1>
        <div className="trip-search-bar-keyword-container my-p">
          <input
            className="trip-search-bar-new-keyword"
            type="text"
            id="keyword"
            placeholder="請輸入地名和關鍵字"
          />
        </div>
        <button className="search-launch-btn">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </>
  );
}
