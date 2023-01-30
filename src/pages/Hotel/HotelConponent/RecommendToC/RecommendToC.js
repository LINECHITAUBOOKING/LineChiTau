import React, { useState, useEffect } from 'react';
import pic3 from '../../img/Hotel1/rocky-DBL.jpg';
import './RecommendToC.scss';
import axios from 'axios';

export const RecommendToC = () => {
  const [cardIsHover, setCardIsHover] = useState(false);
  const [hotelList, setHotelList] = useState([]);
  const [listFilter, setListFilter] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [viewMoreCount, setViewMoreCount] = useState(1);
  const getHotelList = async function () {
    const response = await axios.get(
      'https://my-json-server.typicode.com/TANGEJ0411/fakeDB/main/db.json/hotelaccount'
    );
    // console.log(response.data);
    setHotelList(response.data);
  };
  const getListFilter = function () {
    const newListFilter = [];
    for (let i = 0; i <= Math.ceil(hotelList.length / 4) - 1; i++) {
      let filterItem = [];
      for (let j = 0; j <= 4 * i + 3; j++) {
        if (j > 4 * (i - 1) + 3) {
          filterItem.push(hotelList[j]);
        }
      }
      newListFilter.push(filterItem);
    }
    console.log('newListFilter', newListFilter);
    setListFilter(newListFilter);
  };
  const getDisplayList = function () {
    const newDisplayList = [];
    for (let i = 0; i <= viewMoreCount; i++) {
      newDisplayList.push(listFilter[i]);
    }
    console.log('newDisplayList', newDisplayList);
    setDisplayList(newDisplayList);
  };
  useEffect(() => {
    getHotelList();
  }, []);
  useEffect(() => {
    getListFilter();
    getDisplayList();
  }, [hotelList]);

  useEffect(() => {
    getDisplayList();
  }, [viewMoreCount]);

  return (
    <>
      <div className="recommend-to-c container-xxl pt-5 pb-2">
        <h4 className="title my-heading text-center mb-5">精選推薦給您</h4>
        {displayList.map((v, i) => {
          return (
            v && (
              <div className="cards d-flex justify-content-center mb-5" key={i}>
                {v.map((v2, i2) => {
                  return (
                    <div className="hover-area" key={v2.company_name}>
                      <div className="small-card mx-3">
                        <div className="position-relative">
                          <span class="material-symbols-rounded my-p position-absolute recommand-tag">
                            bookmark
                          </span>
                          <img
                            src={pic3}
                            alt="pic3"
                            className="card-pic my-border-radius"
                          />
                          <h6 className="nav-foot-small my-2">
                            {v2.company_name}
                          </h6>
                          <p className="my-p text-hide">{v2.introduction}</p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex">
                              <div class="material-symbols-outlined my-p">
                                location_on
                              </div>
                              <p className="my-p">{v2.region}</p>
                            </div>
                            <div className="d-flex">
                              <div class="material-symbols-outlined my-p">
                                paid
                              </div>
                              <p className="my-p">1000 / 晚</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        role="button"
                        className="card-hover my-p d-flex justify-content-center m-auto pt-2"
                      >
                        <p>訂房去</p>
                        <div class="material-symbols-outlined">
                          arrow_forward
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )
          );
        })}
        <div className="text-center mt-5">
          <button
            className="my-btn nav-foot"
            onClick={() => {
              setViewMoreCount(viewMoreCount + 1);
            }}
          >
            查看更多
          </button>
        </div>
      </div>
    </>
  );
};

export default RecommendToC;
