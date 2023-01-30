import React from 'react';
import './SearchBar.scss';
import { useState } from 'react';
import Calendar from '../Calendar/Calendar';

const SearchBar = (props) => {
  const [dateFromCalendar, setDateFromCalendar] = useState('');
  // function update(date) {
  //   setDateFromCalendar(date);
  // }
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openConditions, setOpenConditions] = useState(false);
  const [conditions, setConditions] = useState({
    adult: 2, //初始人數,房間數為一
    children: 0, //可以不一定要有小孩
    room: 1,
  });

  const conditionsSelect = ['成人', '兒童', '客房'];
  const plusNum = (type) => {
    const newConditions = { ...conditions };
    if (Number(newConditions[type]) <= 9) {
      newConditions[type] = Number(newConditions[type]) + 1;
      setConditions(newConditions);
    } else {
      newConditions[type] = 10;
      setConditions(newConditions);
    }
    // console.log(newConditions);
  };
  const minusNum = (type) => {
    const newConditions = { ...conditions };
    if (type === 'children') {
      if (Number(newConditions[type]) > 2) {
        newConditions[type] = Number(newConditions[type]) - 1;
        setConditions(newConditions);
      } else {
        newConditions[type] = 0;
        setConditions(newConditions);
      }
    } else {
      if (Number(newConditions[type]) >= 2) {
        newConditions[type] = Number(newConditions[type]) - 1;
        setConditions(newConditions);
      } else {
        newConditions[type] = 1;
        setConditions(newConditions);
      }
    }
  };
  return (
    <div className="container-xxl d-flex justify-content-center m-auto my-5 search-bar-conp">
      <div className="d-flex my-border-radius">
        <div>
          <div
            onClick={() => {
              setOpenCalendar(!openCalendar);
            }}
          >
            <div className="nav-foot-small d-flex">
              <span className="material-symbols-outlined">calendar_month</span>
              入住/退房時間
            </div>
            {/* <input placeholder="請選擇日期" value={dateFromCalendar} /> */}
            <div className="display-box nav-foot-small">{dateFromCalendar}</div>
          </div>
          <div className="listItem">
            {openCalendar && (
              <Calendar setDateFromCalendar={setDateFromCalendar} />
            )}
          </div>
        </div>
        <div>
          <div className="nav-foot-small d-flex">
            <span className="material-symbols-outlined">group</span>人數 / 間數
          </div>
          <input
            className="form-control bg-transparent my-p"
            placeholder={`${conditions['adult']}位成人 / ${conditions['children']} 位小孩 / ${conditions['room']} 間房間`}
            onClick={() => {
              setOpenConditions(!openConditions);
            }}
          />
          {openConditions && (
            <div className="select-room p-1 position-relative">
              {conditionsSelect.map((value, index) => {
                let type;
                switch (value) {
                  case '成人':
                    type = 'adult';
                    break;
                  case '兒童':
                    type = 'children';
                    break;
                  case '客房':
                    type = 'room';
                    break;
                  default:
                    break;
                }
                return (
                  <div
                    className="d-flex justify-content-around my-2 "
                    key={index}
                  >
                    <p className="my-auto">{value}</p>
                    <button
                      className="my-btn nav-foot-small d-flex align-items-center py-2"
                      onClick={() => {
                        minusNum(type);
                      }}
                    >
                      {' '}
                      -{' '}
                    </button>
                    <p className="my-auto">{conditions[type]}</p>
                    <button
                      className="my-btn nav-foot-small d-flex align-items-center py-2"
                      onClick={() => {
                        plusNum(type);
                      }}
                    >
                      {' '}
                      +{' '}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <button className="my-btn nav-foot-small d-flex align-items-center pe-1 py-3">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
