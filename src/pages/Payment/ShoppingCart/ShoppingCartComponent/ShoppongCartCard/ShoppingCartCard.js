import React, { useState, useEffect } from 'react';
import '../../../../../css/global-style.scss';
import './ShoppingCartCard.scss';
// 用url引入圖片得使用import，並在jsx裡面使用{}求值的語法
// import logo from './dohpins_hotel.jpg';
import ProductImg from '../../../../Hotel/img/banner.svg';

export default function ShoppingCartCard(props) {
  console.log('itemssssss', props.cartItem);
  const storage = localStorage;
  const [itemDetail, setItemDetail] = useState({});
  // const [amountA, setAmountA] = useState(props.cartItem.amountA);
  // const [amountC, setAmountC] = useState(props.cartItem.amountC);
  // const [amountE, setAmountE] = useState(props.cartItem.amountE);
  // const [priceA, setPriceA] = useState(props.cartItem.priceA);
  // const [priceC, setPriceC] = useState(props.cartItem.priceC);
  // const [priceE, setPriceE] = useState(props.cartItem.priceE);
  // const [totalPrice, setTotalPrice] = useState(props.cartItem.totalPrice);
  // const [departTime, setDepartTime] = useState(props.cartItem.departTime);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setItemDetail(props.cartItem);
  }, []);
  // const cartItemDetail = {
  //   tripName: props.cartItem.tripName,
  //   planId: props.cartItem.planId,
  //   planName: props.cartItem.planName,
  //   amountA: amountA,
  //   amountC: amountC,
  //   amountE: amountE,
  //   priceA: priceA,
  //   priceC: priceC,
  //   priceE: priceE,
  //   totalPrice: totalPrice,
  //   departTime: departTime,
  //   isChecked: isChecked,
  // };
  useEffect(() => {
    props.updateValue.setItemDetail(itemDetail);
    
  }, [itemDetail]);
  useEffect(() => {
    if (props.cartItemsToPay.length > 0) {
      const newCartItems = [...props.cartItemsToPay];
      newCartItems.push(itemDetail);
      props.updateValue.setCartItemsToPay(newCartItems);
      console.log('cart-detail', newCartItems);
      // setModalOpen(true);
    } else {
      const newCartItems = [];
      newCartItems.push(itemDetail);
      props.updateValue.setCartItemsToPay(newCartItems);
      console.log('cart-detail', newCartItems);
      // setModalOpen(true);
    }
  }, [isChecked]);
  console.log('itemDEtail', itemDetail);
  // console.log(`cartItemINCard+${cartItemDetail.planId}`, cartItemDetail);
  return (
    <>
      <div className="cart-item-card">
        <div className="cart-item-body d-flex row align-items-center justify-content-between mx-0 py-4">
          <div className="justify-content-center text-center align-items-center col-1">
            <input
              type="checkbox"
              id=""
              value={!isChecked}
              name="topay"
              className="justify-content-center text-center align-items-center "
              onChange={(e) => {
                setIsChecked(!isChecked);
                setItemDetail({
                  ...itemDetail,
                  isChecked: e.target.value,
                });
                console.log('拷貝');
              }}
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
              <h1 className="nav-foot text-truncate ">{itemDetail.tripName}</h1>
              <p className="my-p">方案：{itemDetail.planName}</p>
            </div>
          </div>
          <div className="expire-date-box text-center my-p col-2">
            兌換期內皆適用
            <br />
            當地時間
          </div>
          <div className="buying-amount text-center col-2">
            <h1 className="unit my-p my-1">成人</h1>
            <div className="control-wrapper d-flex justify-content-between align-items-center">
              <span
                class="material-symbols-rounded cart-pointer"
                onClick={() => {
                  setItemDetail({
                    ...itemDetail,
                    amountA: itemDetail.amountA + 1,
                  });
                  // setAmountA(cartItemDetail.amountA + 1);
                }}
              >
                add_circle
              </span>
              <div className=" cart-amount d-flex justify-content-center align-items-center">
                {itemDetail.amountA}
              </div>
              <span
                class="material-symbols-rounded cart-pointer"
                onClick={() => {
                  setItemDetail({
                    ...itemDetail,
                    amountA: itemDetail.amountA - 1,
                  });
                  // setAmountA(cartItemDetail.amountA - 1);
                }}
              >
                do_not_disturb_on
              </span>
            </div>
            <h1 className="unit my-p my-1">小孩</h1>
            <div className="control-wrapper d-flex justify-content-between align-items-center">
              <span
                class="material-symbols-rounded cart-pointer"
                onClick={() => {
                  setItemDetail({
                    ...itemDetail,
                    amountC: itemDetail.amountC + 1,
                  });
                  // setAmountC(cartItemDetail.amountC + 1);
                }}
              >
                add_circle
              </span>
              <div className=" cart-amount d-flex justify-content-center align-items-center">
                {itemDetail.amountC}
              </div>
              <span
                class="material-symbols-rounded cart-pointer"
                onClick={() => {
                  setItemDetail({
                    ...itemDetail,
                    amountC: itemDetail.amountC + 1,
                  });
                  // setAmountC(cartItemDetail.amountC - 1);
                }}
              >
                do_not_disturb_on
              </span>
            </div>
            <h1 className="unit my-p my-1">老人</h1>
            <div className="control-wrapper d-flex justify-content-between align-items-center">
              <span
                class="material-symbols-rounded cart-pointer"
                onClick={() => {
                  setItemDetail({
                    ...itemDetail,
                    amountE: itemDetail.amountE + 1,
                  });
                  // setAmountE(cartItemDetail.amountE + 1);
                }}
              >
                add_circle
              </span>
              <div className=" cart-amount d-flex justify-content-center align-items-center">
                {itemDetail.amountE}
              </div>
              <span
                class="material-symbols-rounded cart-pointer"
                onClick={() => {
                  setItemDetail({
                    ...itemDetail,
                    amountE: itemDetail.amountE + 1,
                  });
                  // setAmountE(cartItemDetail.amountE - 1);
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
          {/* {props.updateValue.setTotalPrice(
            props.priceE * props.amountE +
              props.priceC * props.amountC +
              props.priceA * props.amountA
          )} */}
          <div className="price my-heading">
            NT${' '}
            
            {/* {itemDetail.totalPrice} */}
          </div>
        </div>
      </div>
    </>
  );
}
