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

function Demo() {
  const [fetchError, setFetchError] = useState('');
  const {
    csrfToken,
    jwtToken,
    jwtDecodedData,
    init,
    login,
    logout,
    getNewAccessToken,
    auth,
  } = useJwtCsrfToken();

  // const { spinner, setLoading } = useSpinner(1300);

  init(axios);

  const [member, setMember] = useState({
    name: 'tom',
    password: '123456',
    confirmPassword: '123456',
    email: 'test@gmail.com',
  });

  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    console.log('handleSubmit');
    // 關閉表單的預設行為
    e.preventDefault();
    // 作法1: 沒有檔案的表單
    // ajax
    // let response = await axios.post('http://localhost:3001/api/auth/register', member);
    // 作法2: 有檔案的表單
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData
    let formData = new FormData();
    formData.append('email', member.email);
    formData.append('name', member.name);
    formData.append('password', member.password);
    formData.append('confirmPassword', member.confirmPassword);
    formData.append('photo', member.photo);
    let response = await axios.post('http://localhost:3001/register', member);
    console.log(response.data);
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
              placeholder="請再次輸入密碼"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>
          <button className="lastBtn" onClick={handleSubmit}>
            註冊
          </button>
        </from>
        {/* <button className="firstBtn">登入/註冊</button>
          使用第三方帳戶登入/創立帳戶
          <div className="icon">
            <img className="pic" src={line} alt="" />
            <img className="pic" src={twitter} alt="" />
            <img className="pic" src={fackbook} alt="" />
            <img className="pic" src={google} alt="" />
          </div>
          <div className="email">
            電子信箱
            <input type="text" placeholder="請輸入電子信箱" />
            <div className="emailWarning">
              <span class="material-symbols-outlined">report</span>
              信箱已存在
            </div>
          </div>
          <div className="password">
            密碼
            <input type="text" placeholder="請輸入密碼" />
            <div className="passwordWarning">
              <span class="material-symbols-outlined">report</span>
              伺服器無回應，請聯絡客服
            </div>
            <div className="passwordWarning">
              <span class="material-symbols-outlined">report</span>
              輸入了非合法的指令
            </div>
            <div className="forget">忘記帳號/密碼?</div>
          </div>
          <div className="loader">
            <ClipLoader color="#734338" size={15} />
            <div className="loaderText">伺服器驗證中...</div>
          </div>
          <div className="check">
            <span class="material-symbols-outlined">done</span>
            成功！1秒後跳轉首頁
          </div>
          <button className="lastBtn">登入/註冊</button> */}

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