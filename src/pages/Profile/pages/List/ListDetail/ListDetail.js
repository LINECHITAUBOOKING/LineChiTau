import React from 'react';
import './ListDetail.scss';
import pic1 from '../images/pic1.png';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
const ListDetail = () => {
  const { id } = useParams();

  const detailList = async () => {
    const response = await fetch(`https://reqres.in/api/users?page=2&id=${id}`);
    const data = await response.json();
    return data;
  };
  const { data, isLoading } = useQuery('listdata', detailList, {
    retry: false,
    refetchOnWindowFocus: false,
    cacheTime: 1000,
  });
  console.log(data);
  return (
    <div className="container">
      <div className="confirm-order">
        <div className="top">
          <div className="text1 h1">已確認訂單</div>
          <div className="text2">
            <div className="t-1">訂單號:CFA460026</div>
            <div className="t-2">購買時間:2020年8月24日 9:50AM</div>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <div className="letf-1">實付金額：NT$ 7,200</div>
            <div className="left-2">付款詳情</div>
          </div>
          <div className="btn">
            <button className="my-btn mx-2">查看憑證</button>
            <button className="my-btn">撰寫評價</button>
          </div>
        </div>
      </div>
      <div className=" order-infomation">
        <div className="title h1">訂購詳情</div>
        <hr className="hr" />
        <div className="list-detail">
          <img src={data.data.avatar} alt="" />
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
              <div className="sub-item-text">9位成人</div>
            </div>
          </div>
        </div>
      </div>

      <div className="qa">
        <div className="top h1">遇到訂單問題嗎?</div>
        <hr />
        <div className="bottom">
          <button className="my-btn">線上客服</button>
        </div>
      </div>
    </div>
  );
};

export default ListDetail;
