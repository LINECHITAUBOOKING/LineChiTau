import React, { useEffect, useState } from 'react';
import ShoppingCartCard from './ShoppingCartComponent/ShoppongCartCard/ShoppingCartCard';
import './ShoppingCart.scss';
import ProgressBar from '../PaymentComponent/ProgressBar/ProgressBar';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

export default function ShoppingCart() {
  const [amount, setAmount] = useState(1);
  const currentStep = 1;
  const storage = localStorage;
  const cartStorage = storage.getItem('cart');
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsToPay, setCartItemsToPay] = useState([]);

  const [itemDetail, setItemDetail] = useState({});

  // const [amountA, setAmountA] = useState(0);
  // const [amountC, setAmountC] = useState(0);
  // const [amountE, setAmountE] = useState(0);
  // const [priceA, setPriceA] = useState(0);
  // const [priceC, setPriceC] = useState(0);
  // const [priceE, setPriceE] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);
  const updateValue = {
    // setAmountA: (value) => {
    //   setAmountA(value);
    // },
    // setAmountC: (value) => {
    //   setAmountC(value);
    // },
    // setAmountE: (value) => {
    //   setAmountE(value);
    // },
    // setPriceA: (value) => {
    //   setPriceA(value);
    // },
    // setPriceC: (value) => {
    //   setPriceC(value);
    // },
    // setPriceE: (value) => {
    //   setPriceE(value);
    // },
    setCartItemsToPay: (value) => {
      setCartItemsToPay(value);
    },
    setItemDetail: (value) => {
      setItemDetail(value);
    },
  };

  useEffect(() => {
    if (cartStorage === null) {
      setCartItems([]);
    } else {
      setCartItems(JSON.parse(storage.getItem('cart')));
    }
  }, []);
  console.log('storage.getItem(cart)===null', cartStorage);
  console.log(cartItems);
  console.log('Array.isArray(cartItems)', Array.isArray(cartItems));
  console.log('OutCart', itemDetail);

  return (
    <>
      <ProgressBar currentStep={currentStep} />

      <div className="container main-width px-0 mb-5">
        <div>
          <h1 className="h3 title">購物車</h1>
        </div>
        <div className="p-0 m-0 row w-100">
          <div className="main-wrapper col-9 px-0">
            <div className="d-flex align-items-center cart-controll-bar justify-content-start mx-0 py-3 mb-3 row">
              <div className="selector justify-content-center text-center align-items-center col-1">
                <input type="checkbox" id="" name="" />
              </div>
              <div className=" my-heading col-auto">全選</div>
              {/* NOTE 可以按的 */}
              <div className=" my-heading col-auto">清空已失效活動</div>
            </div>

            <div className="product-wrapper">
              {cartItems.length !== 0 ? (
                cartItems.map((cartItem, index) => {
                  return (
                    <ShoppingCartCard
                      key={index}
                      cartItem={cartItem}
                      cartItemsToPay={cartItemsToPay}
                      updateValue={updateValue}
                    />
                  );
                })
              ) : (
                <div className="">購物車為空</div>
              )}
            </div>

            {/* <h1 className="h3 mt-5 title">以下活動需要重新認證</h1>
            <div className="product-wrapper mt-3">
              
            </div> */}
          </div>
          <div className=" col-3">
            <div className="cart-totalSub px-4 py-4">
              <div className="total nav-foot-small pt-3">總計 5 項</div>

              <div class="my-topic  py-3">NT$ 99999</div>
              <div className="d-flex justify-content-center ">
                <Link
                  className="text-decoration-none cart-link-btn"
                  to={'/payment/Travel/Detail'}
                >
                  <button className="my-btn my-p px-3">前往結帳</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
