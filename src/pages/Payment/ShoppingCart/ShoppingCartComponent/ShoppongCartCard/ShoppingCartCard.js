import React, { useState } from 'react';
import '../../../../../css/global-style.scss';
import './ShoppingCartCard.scss';
// 用url引入圖片得使用import，並在jsx裡面使用{}求值的語法
// import logo from './dohpins_hotel.jpg';
import ProductImg from '../../../../Hotel/img/banner.svg';

export default function ShoppingCartCard(props) {
  console.log('propssssss', props.setAmount);
  console.log('propsss====items', props.items);
  
 
  return (
    <>
      {props.items.map((item, index) => (
        <div className="cart-item-card" key={index}>
          <div className="cart-item-body d-flex row align-items-center justify-content-between mx-0 py-4">
            <div className="justify-content-center text-center align-items-center col-1">
              <input
                type="checkbox"
                id=""
                name=""
                className="justify-content-center text-center align-items-center "
              />
            </div>
            <div className="item-box col-7">
              <div className="img-box">
                <img
                  src={ProductImg}
                  alt="海豚圖片"
                  className="object-cover my-border-radius"
                />
              </div>
              <div className="text-box  mx-2">
                <h1 className="nav-foot text-truncate ">{item.tripName}</h1>
                <p className="my-p">方案：{item.planName}</p>
              </div>
            </div>
            <div className="expire-date-box text-center my-p col-2">
              兌換期內皆適用
              <br />
              當地時間
            </div>
            <div className="buying-amount text-center col-2">
              <h1 className="unit my-p">成人</h1>
              <div className="control-wrapper d-flex justify-content-between align-items-center">
                <span
                  class="material-symbols-rounded cart-pointer"
                  onClick={() => {
                    props.updateValue.setAmountA(item.amountA + 1);
                  }}
                >
                  add_circle
                </span>
                <div className=" cart-amount d-flex justify-content-center align-items-center">
                  {item.amountA}
                </div>
                <span
                  class="material-symbols-rounded cart-pointer"
                  onClick={() => {
                    props.updateValue.setAmountA(item.amountA - 1);
                  }}
                >
                  do_not_disturb_on
                </span>
              </div>
              <h1 className="unit my-p">小孩</h1>
              <div className="control-wrapper d-flex justify-content-between align-items-center">
                <span
                  class="material-symbols-rounded cart-pointer"
                  onClick={() => {
                    props.updateValue.setAmountC(item.amountC + 1);
                  }}
                >
                  add_circle
                </span>
                <div className=" cart-amount d-flex justify-content-center align-items-center">
                  {item.amountC}
                </div>
                <span
                  class="material-symbols-rounded cart-pointer"
                  onClick={() => {
                    props.updateValue.setAmountC(item.amountC - 1);
                  }}
                >
                  do_not_disturb_on
                </span>
              </div>
              <h1 className="unit my-p">老人</h1>
              <div className="control-wrapper d-flex justify-content-between align-items-center">
                <span
                  class="material-symbols-rounded cart-pointer"
                  onClick={() => {
                    props.updateValue.setAmountE(item.amountE + 1);
                  }}
                >
                  add_circle
                </span>
                <div className=" cart-amount d-flex justify-content-center align-items-center">
                  {item.amountE}
                </div>
                <span
                  class="material-symbols-rounded cart-pointer"
                  onClick={() => {
                    props.updateValue.setAmountE(item.amountE - 1);
                  }}
                >
                  do_not_disturb_on
                </span>
              </div>
            </div>
          </div>
          <div className="cart-item-bottom d-flex align-items-center justify-content-between px-3 py-3">
            <div className="cart-contrll-group d-flex justify-content-around row">
              <div className="edit my-heading col-6">編輯</div>
              <div className="delete my-heading col-6">刪除</div>
            </div>
            {props.updateValue.setTotalPrice(
        props.priceE * props.amountE +
          props.priceC * props.amountC +
          props.priceA * props.amountA
      )}
            <div className="price my-heading">
              NT$ {item.price * item.amount}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
