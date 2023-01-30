import React, { useEffect, useState } from 'react';
import './Demo.scss';
import axios from 'axios';
import { useJwtCsrfToken } from './csrf-hook/useJwtCsrfToken';
import { ClipLoader } from 'react-spinners';
import bgimg from './image/silder1.jpeg';
import fackbook from './image/fackbook.png';
import google from './image/google.png';
import line from './image/line.png';
import twitter from './image/twitter.png';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

function Demo() {
  const [fetchError, setFetchError] = useState('');
  const {
    csrfToken,
    jwtToken,
    jwtDecodedData,
    init,
    login,
    register,
    logout,
    getNewAccessToken,
    auth,
  } = useJwtCsrfToken();

  // const { spinner, setLoading } = useSpinner(1300);

  init(axios);

  const [member, setMember] = useState({});

  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }
  function checkpassword(password, confirmPassword) {
    if (password !== confirmPassword) {
      alert('密碼與確認密碼不一致');
      return false;
    }
    return true;
  }
  async function handleSubmit(e) {
    console.log('handleSubmit');
    if (!!member.email === false) {
      alert('請輸入email');
      return;
    }
    if (!!member.name === false) {
      alert('請輸入帳號名稱');
      return;
    }
    if (!!member.password === false) {
      alert('請輸入密碼');
      return;
    }
    if (!!member.confirmPassword === false) {
      alert('請輸入確認密碼');
      return;
    }
    if (!checkpassword(member.password, member.confirmPassword)) return;
    // 關閉表單的預設行為
    e.preventDefault();
    // 作法1: 沒有檔案的表單
    // ajax
    // let response = await axios.post('http://localhost:3001/api/auth/register', member);
    // 作法2: 有檔案的表單
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData
    let formData = {
      email: member.email,
      username: member.name,
      password: member.password,
      confirmPassword: member.confirmPassword,
    };
    //formData.append('email', member.email);
    //formData.append('username', member.name);
    //formData.append('password', member.password);
    //formData.append('confirmPassword', member.confirmPassword);
    //formData.append('photo', member.photo);
    let response = await axios.post('/auth/register', formData);
    console.log(response.data);
    console.log('q');
  }

  return (
    <>
      <div className="demo">
        <from className="login">
          <div className="firstBtn">註冊</div>
          使用第三方帳戶登入/創立帳戶
          <div className="icon">
            <img className="pic" src={line} alt="" />
            <img className="pic" src={twitter} alt="" />
            <img className="pic" src={fackbook} alt="" />
            <img className="pic" src={google} alt="" />
          </div>
          <div className="email">
            電子信箱
            <input
              type="text"
              placeholder="請輸入電子信箱"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="name">
            姓名
            <input
              type="text"
              placeholder="請輸入姓名"
              id="name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="password">
            密碼
            <input
              type="password"
              placeholder="請輸入密碼"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="confirmPassword">
            再輸入一次密碼
            <input
              type="password"
              placeholder="請確認密碼"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>
          <button className="lastBtn" onClick={handleSubmit}>
            註冊
          </button>
          <button
            onClick={() =>
              login({ username: member.name, password: member.password })
            }
          >
            login
          </button>
          <button
            onClick={() =>
              register({ username: member.name, password: member.password })
            }
          >
            register
          </button>
        </from>

        <img className="pic" src={bgimg} alt="" />
      </div>

      {/* <section style={{ marginBottom: '10px' }}>
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
        {console.log(auth)}
      </section>
      <section style={{ marginBottom: '10px' }}>
        <button onClick={() => login({ username: 'eddy', password: '33333' })}>
          login
        </button>
        <button
          onClick={() => register({ username: 'Jerry', password: '33333' })}
        >
          register
        </button>
        {console.log(auth)}
      </section>
      <section style={{ marginBottom: '10px' }}>
        <h2>Debug</h2>
        <p>CSRF Token: {csrfToken}</p>
        <p style={{ wordWrap: 'break-word', width: '500px' }}>
          Access Token: {jwtToken}
        </p>
        <p>Token Decoded Data: {Object.entries(jwtDecodedData).join(' ')}</p>
      </section> */}
    </>
  );
}

export default Demo;
