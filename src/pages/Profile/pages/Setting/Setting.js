import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Setting.scss';
import { JwtCsrfTokenContext } from '../../../../utils/csrf-hook/useJwtCsrfToken';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Setting = () => {
  const { jwtToken, userF, logout } = useContext(JwtCsrfTokenContext);
  const [member, setMember] = useState({});
  console.log('userF', userF.pwd);
  console.log(jwtToken);
  const navigate = useNavigate();
  const location = useLocation();
  if (!jwtToken) {
    return (
      <>
        <span>notoken</span>
      </>
    );
  }

  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    console.log('handleSubmit');

    e.preventDefault();

    let formData = {
      name: member.name,
      city: member.city,
      country: member.country,
      nickname: member.nickname,
      birthday: member.birthday,
      phone: member.phone,
      email: userF.email,
    };
    try {
      let response = await axios.post('/auth/setting', formData);
      console.log(response.status);
      console.log('成功');
      alert('更新成功');
    } catch (e) {
      alert('更新失敗');
    }
  }

  async function handleSubmitpassword(e) {
    e.preventDefault();
    console.log('handleSubmit');
    if (member.password !== userF.pwd) {
      alert('現有密碼錯誤');
      return;
    }
    if (!member.newpassword) {
      alert('密碼不能為空');
      return;
    }
    if (!member.confirmPassword) {
      alert('確認密碼不能為空');
      return;
    }

    let formData = {
      email: userF.email,
      password: member.password,
      newpassword: member.newpassword,
    };
    console.log(formData);
    try {
      let response = await axios.post('/auth/setting-password', formData);
      console.log(response.status);
      console.log('成功');
      alert('密碼更新成功請重新登入');
      logout();
      navigate('/login1');
    } catch (e) {
      alert('密碼更新失敗');
    }
  }
  return (
    <div className="container-setting">
      <h1 className="buytitle valign-text-middle notosans-normal-old-copper-32px">
        管理個人資料
      </h1>
      <form className="manger-profile my-border-radius">
        <div className="form">
          <div className="form-item">
            <div className="form-input">
              <div className="form-text1">
                姓名
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input
                className="input-setting"
                type="text"
                placeholder="Placeholder"
                id="name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <div className="form-text1">
                居住地
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input
                className="input-setting"
                type="text"
                placeholder="Placeholder"
                id="city"
                name="city"
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <div className="form-text1">
                國家
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input
                className="input-setting"
                type="text"
                placeholder="Placeholder"
                id="country"
                name="country"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-item">
            <div className="form-input">
              <div className="form-text1">
                暱稱
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input
                className="input-setting"
                type="text"
                placeholder="Placeholder"
                id="nickname"
                name="nickname"
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <div className="form-text1">
                生日
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input
                className="input-setting"
                type="text"
                placeholder="Placeholder"
                id="birthday"
                name="birthday"
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <div className="form-text1">
                電話號碼
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input
                className="input-setting"
                type="text"
                placeholder="Placeholder"
                id="phone"
                name="phone"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="btn-center">
          <button className="my-btn" onClick={handleSubmit}>
            儲存
          </button>
        </div>
      </form>
      <h1 className="buytitle valign-text-middle notosans-normal-old-copper-32px">
        修改密碼
      </h1>
      <form className="manger-profile my-border-radius">
        <div className="form">
          <div className="form-item">
            <div className="form-input">
              <div className="form-text1">
                現有密碼
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input
                className="input-setting"
                type="password"
                placeholder="Placeholder"
                id="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <div className="form-text1">
                新密碼
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input
                className="input-setting"
                type="password"
                placeholder="Placeholder"
                id="newpassword"
                name="newpassword"
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <div className="form-text1">
                確認密碼
                <div className="NotRequired"> &nbsp; (Not Required)</div>
              </div>
              <input
                className="input-setting"
                type="password"
                placeholder="Placeholder"
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="btn-center">
          <button className="my-btn btn-pwd" onClick={handleSubmitpassword}>
            儲存
          </button>
        </div>
      </form>
    </div>
  );
};

export default Setting;
