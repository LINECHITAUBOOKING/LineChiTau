import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Sidebar from './layouts/Sidebar';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile screen">
      <div className="main">
        <Sidebar />

        {/*  <div className="container">
          <h1 className="buytitlevalign-text-middlenotosans-normal-old-copper-32px">
            訂購清單
          </h1>
          <div className="buylist">
            <div className="overlap-group9">
              <div className="buylist-items">
                <div className="overlap-group5">
                  <div className="component">
                    <div className="overlap-group-1">
                      <img
                        className="rectangle-1911"
                        src="rectangle-1911.png"
                        alt="Rectangle 1911"
                      />
                      <div className="sukhothai-old-cityvalign-text-middlenotosans-normal-old-copper-20px">
                        宜蘭龜山島賞鯨體驗
                      </div>
                    </div>
                  </div>
                  <div className="text-1valign-text-middlenotosans-normal-sepia-16px">
                    2022-12-31 15:00
                  </div>
                </div>
                <div className="overlap-group3">
                  <div className="component">
                    <div className="overlap-group-1">
                      <img
                        className="rectangle-1911"
                        src="rectangle-1911-1.png"
                        alt="Rectangle 1911"
                      />
                      <div className="sukhothai-old-cityvalign-text-middlenotosans-normal-old-copper-20px">
                        宜蘭龜山島賞鯨體驗
                      </div>
                    </div>
                  </div>
                  <div className="text-2valign-text-middlenotosans-normal-sepia-16px">
                    2022-12-31 15:00
                  </div>
                </div>
                <div className="overlap-group4">
                  <div className="component">
                    <div className="overlap-group-1">
                      <img
                        className="rectangle-1911"
                        src="rectangle-1911-1.png"
                        alt="Rectangle 1911"
                      />
                      <div className="sukhothai-old-cityvalign-text-middlenotosans-normal-old-copper-20px">
                        宜蘭龜山島賞鯨體驗
                      </div>
                    </div>
                  </div>
                  <div className="text-3valign-text-middlenotosans-normal-sepia-16px">
                    2022-12-31 15:00
                  </div>
                </div>
              </div>
              <div className="nt-7200-1valign-text-middlenotosans-normal-sepia-16px">
                實付金額：NT$ 7200
              </div>
              <div className="nt-7200-2valign-text-middlenotosans-normal-sepia-16px">
                實付金額：NT$ 7200
              </div>
              <div className="nt-7200-3valign-text-middlenotosans-normal-sepia-16px">
                實付金額：NT$ 7200
              </div>
              <div className="button-1">
                <div className="publishvalign-text-middlenotosans-normal-old-copper-16px">
                  查看憑證
                </div>
              </div>
              <div className="button-2">
                <div className="publishvalign-text-middlenotosans-normal-old-copper-16px">
                  查看憑證
                </div>
              </div>
              <div className="button-3">
                <div className="publishvalign-text-middlenotosans-normal-old-copper-16px">
                  查看憑證
                </div>
              </div>
              <div className="button-4">
                <div className="overlap-group-2">
                  <div className="publishvalign-text-middlenotosans-normal-old-copper-16px">
                    撰寫評價
                  </div>
                </div>
              </div>
              <div className="button-5">
                <div className="overlap-group-2">
                  <div className="publishvalign-text-middlenotosans-normal-old-copper-16px">
                    撰寫評價
                  </div>
                </div>
              </div>
              <div className="button-6">
                <div className="overlap-group-2">
                  <div className="publishvalign-text-middlenotosans-normal-old-copper-16px">
                    撰寫評價
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prefertitlevalign-text-middlenotosans-normal-old-copper-32px">
            推薦商品
          </div>
          <div className="preferlist">
            <div className="group-102-1">
              <div className="overlap-group-3">
                <img
                  className="rectangle-82"
                  src="rectangle-82.png"
                  alt="Rectangle 82"
                />
                <div className="surname-1">Snow Hills</div>
                <p className="great-skiing-opportu-1notosans-bold-old-copper-14px">
                  Great skiing opportunity with a beautiful view
                </p>
                <div className="group-98-1">
                  <div className="group-97-1">
                    <img className="place" src="place.png" alt="place" />
                    <div className="carpati-ukraine-1notosans-bold-old-copper-14px">
                      Carpati., Ukraine
                    </div>
                  </div>
                  <div className="group-96">
                    <img className="coin-1" src="coin.png" alt="coin" />
                    <div className="group-107-1">
                      <div className="number-1">75</div>
                      <div className="person-1">/ person</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-3707">
              <div className="group-102-2">
                <div className="overlap-group-3">
                  <img
                    className="rectangle-82"
                    src="rectangle-82.png"
                    alt="Rectangle 82"
                  />
                  <div className="surname-2microsoftjhenghei-bold-old-copper-18px">
                    Snow Hills
                  </div>
                  <p className="great-skiing-opportu-2microsoftjhenghei-bold-old-copper-14px">
                    Great skiing opportunity with a beautiful view
                  </p>
                  <div className="group-98-2">
                    <div className="group-97-2">
                      <img className="place" src="place.png" alt="place" />
                      <div className="carpati-ukraine-2microsoftjhenghei-bold-old-copper-14px">
                        Carpati., Ukraine
                      </div>
                    </div>
                    <div className="group-96">
                      <img className="coin-2" src="coin.png" alt="coin" />
                      <div className="group-107-2">
                        <div className="number-2microsoftjhenghei-bold-old-copper-16px">
                          75
                        </div>
                        <div className="person-2microsoftjhenghei-regular-normal-old-copper-10px">
                          / person
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-3707">
              <div className="group-102-3">
                <div className="overlap-group-3">
                  <img
                    className="rectangle-82"
                    src="rectangle-82.png"
                    alt="Rectangle 82"
                  />
                  <div className="surname-3microsoftjhenghei-bold-old-copper-18px">
                    Snow Hills
                  </div>
                  <p className="great-skiing-opportu-3microsoftjhenghei-bold-old-copper-14px">
                    Great skiing opportunity with a beautiful view
                  </p>
                  <div className="group-98-3">
                    <div className="group-97-3">
                      <img className="place" src="place.png" alt="place" />
                      <div className="carpati-ukraine-3microsoftjhenghei-bold-old-copper-14px">
                        Carpati., Ukraine
                      </div>
                    </div>
                    <div className="group-96">
                      <img className="coin-3" src="coin.png" alt="coin" />
                      <div className="group-107-3">
                        <div className="number-3microsoftjhenghei-bold-old-copper-16px">
                          75
                        </div>
                        <div className="person-3microsoftjhenghei-regular-normal-old-copper-10px">
                          / person
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
