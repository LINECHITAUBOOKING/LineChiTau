import React from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './HotelBanner.scss';
import { useState } from 'react';

import { format } from 'date-fns';
import * as locales from 'react-date-range/dist/locale';

export const HotelBanner = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openConditions, setOpenConditions] = useState(false);
  const [conditions, setConditions] = useState({
    adult: 2, //初始人數,房間數為一
    children: 0, //可以不一定要有小孩
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
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
    <div className="banner position-relative">
      <div className="search-bar position-absolute d-flex my-border-radius">
        <div>
          <div className="nav-foot-small d-flex">
            <span className="material-symbols-outlined">location_on</span>目的地
          </div>
          <input
            type="text"
            placeholder="請輸入目的地"
            className="form-control bg-transparent my-p"
          />
        </div>
        <div>
          <div className="nav-foot-small d-flex">
            <span className="material-symbols-outlined">calendar_month</span>
            入住/退房時間
          </div>
          <div className="listItem">
            <span className="date">
              <div
                className="searchInput"
                onClick={() => setOpenCalendar(!openCalendar)}
              >
                <label className="my-p fw-normal">
                  {format(date[0].startDate, 'MM/dd/yyyy')} -{' '}
                  {format(date[0].endDate, 'MM/dd/yyyy')}
                </label>
              </div>
              {openCalendar && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                  locale={locales['zhTW']}
                />
              )}
            </span>
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
            <div className="select-room">
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

export default HotelBanner;
