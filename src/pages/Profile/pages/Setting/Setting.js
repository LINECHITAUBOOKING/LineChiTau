import React from 'react';
import './Setting.scss';
const Setting = () => {
  return (
    <div className="container">
      <h1 className="buytitle valign-text-middle notosans-normal-old-copper-32px">
        管理個人資料
      </h1>
      <div className="manger-profile my-border-radius">
        <div className="form">
          <div className="form-item">
            <div className="form-input">
              <div className="form-text1">
                姓氏
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input type="text" placeholder="Placeholder" />
            </div>
            <div className="form-input">
              <div className="form-text1">
                居住地
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input type="text" placeholder="Placeholder" />
            </div>
            <div className="form-input">
              <div className="form-text1">
                國家
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input type="text" placeholder="Placeholder" />
            </div>
            <div className="form-input">
              <div className="form-text1">
                生日
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input type="text" placeholder="Placeholder" />
            </div>
          </div>
          <div className="form-item">
            <div className="form-input">
              <div className="form-text1">
                名字
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input type="text" placeholder="Placeholder" />
            </div>
            <div className="form-input">
              <div className="form-text1">
                稱謂
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input type="text" placeholder="Placeholder" />
            </div>
            <div className="form-input">
              <div className="form-text1">
                電話號碼
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input type="text" placeholder="Placeholder" />
            </div>
            <div className="form-input">
              <div className="form-text1">
                電子信箱
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input type="text" placeholder="Placeholder" />
            </div>
          </div>
        </div>
        <div className="btn-center">
          <button className="my-btn">儲存</button>
        </div>
      </div>
      <h1 className="buytitle valign-text-middle notosans-normal-old-copper-32px">
        修改密碼
      </h1>
      <div className="manger-profile my-border-radius">
        <div className="form">
          <div className="form-item">
            <div className="form-input">
              <div className="form-text1">
                現有密碼
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input type="text" placeholder="Placeholder" />
            </div>
            <div className="form-input">
              <div className="form-text1">
                新密碼
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input type="text" placeholder="Placeholder" />
            </div>
            <div className="form-input">
              <div className="form-text1">
                確認密碼
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input type="text" placeholder="Placeholder" />
            </div>
          </div>
        </div>
        <div className="btn-center">
          <button className="my-btn btn-pwd">儲存</button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
