import React, { useEffect, useContext } from 'react';
import './ListDetail.scss';
import pic1 from '../images/pic1.png';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { JwtCsrfTokenContext } from '../../../../../utils/csrf-hook/useJwtCsrfToken';

const ListDetail = () => {
  const { jwtToken, userF,jwtDecodedData } = useContext(JwtCsrfTokenContext);

  // const listid = props.listid.listid;
  const { id } = useParams();
  const detailList = async () => {
    const res = await fetch(
      `http://localhost:3001/api/userlist/list/${jwtDecodedData.email}/${id}`
    );
    const listdata = await res.json();
    // console.log(JSON.parse(response));
    return listdata;
  };
  const {
    data: listdata,
    isLoading,
    isError,
  } = useQuery('listdetail', detailList, {
    cacheTime: 1000,
  });
  console.log(listdata);
  console.log(id);
  let result;
  if (listdata === undefined) {
    return <>Loading...</>;
  }
  if (listdata !== undefined) {
    [result] = listdata;
  }
  console.log(result);
  if (isError) {
    console.log('錯了');
  }
  let statusText =
    result.state === 0 ? '未付款' : result.state === 1 ? '已付款' : '已取消';

  return (
    <div className="container-listdetail">
      <div className="confirm-order">
        <div className="top-listdetail">
          <div className="text1 h1">訂單資訊</div>

          <div className="text2">
            <div className="t-1">訂單號:{result.id}</div>
            <div className="t-2">購買時間:{result.order_date}</div>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <div className="letf-1">實付金額：NT${result.total_price}</div>
            <div className="left-2">付款詳情：{statusText}</div>
          </div>
          <div className="btn">
            {/* <button className="my-btn mx-2">查看憑證</button> */}
            <button className="my-btn">撰寫評價</button>
          </div>
        </div>
      </div>
      <div className=" order-infomation">
        <div className="title-listdetail h1">訂購詳情</div>
        <hr className="hr-listdetail" />
        <div className="list-detail">
          <img src={''} alt="" />
          <div className="list-item">
            <div className="subtitle">限時8折</div>
            <div className="sub-item">
              <div className="sub-item-title">方案類型</div>
              <div className="sub-item-text">賞鯨&環繞龜山島</div>
            </div>
            <hr />
            <div className="sub-item">
              <div className="sub-item-title">參加日期</div>
              <div className="sub-item-text">2020年9月5日 1:00PM(當地時間)</div>
            </div>
            <hr />
            <div className="sub-item">
              <div className="sub-item-title">現有預定</div>
              <div className="sub-item-text">{result.total_amount}位參加</div>
            </div>
          </div>
        </div>
      </div>

      <div className="qa">
        <div className="top-listdetail h1">遇到訂單問題嗎?</div>
        <hr />
        <div className="bottom">
          <button className="my-btn">線上客服</button>
        </div>
      </div>
    </div>
  );
};

export default ListDetail;
