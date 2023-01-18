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

  return (
    <>
      <div className="demo">
        <div className="login">
          <button className="firstBtn">登入/註冊</button>
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
          <button className="lastBtn">登入/註冊</button>
        </div>
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
