import React, { useState } from 'react';
import ShoppingCartCard from './ShoppingCartComponent/ShoppongCartCard/ShoppingCartCard';
import './ShoppingCart.scss';
import ProgressBar from '../PaymentComponent/ProgressBar/ProgressBar';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

export default function ShoppingCart() {
  const [amount, setAmount] = useState(1);
  const currentStep = 1;

  const cartItems = [
    {
      itemId: 1,
      itemName: '南投｜全台唯一不靠海全是山遍地山豬，開始野豬騎士的訓練之旅',
      itemChosen: '野豬騎士的訓練之旅(從捕捉山豬開始)',
      chosenStartDate: '2023-01-31',
      chosenEndDate: '2023-01-31',
      price: 600,
      amount: 1,
    },
    {
      itemId: 2,
      itemName: '台南 | 螞蟻人的天堂蛀牙人的噩夢，擁有甜甜價的甜甜飲料之旅',
      itemChosen: '沒有水只有糖的飲料店之旅',
      chosenStartDate: '2023-01-31',
      chosenEndDate: '2023-02-02',
      price: 1800,
      amount: 2,
    },
  ];
  const cartOverItems = [
    {
      itemId: 1,
      itemName: '南投｜全台唯一不靠海全是山遍地山豬，開始野豬騎士的訓練之旅',
      itemChosen: '野豬騎士的訓練之旅(騎術訓練)',
      chosenStartDate: '2021-01-31',
      chosenEndDate: '2021-01-31',
      price: 200,
      amount: 1,
    },
    {
      itemId: 2,
      itemName: '台南 | 螞蟻人的天堂蛀牙人的噩夢，擁有甜甜價的甜甜飲料之旅',
      itemChosen: '從半糖開始的新手螞蟻人之旅',
      chosenStartDate: '2021-01-31',
      chosenEndDate: '2021-02-02',
      price: 600,
      amount: 13,
    },
    {
      itemId: 3,
      itemName: '台南 | 螞蟻人的天堂蛀牙人的噩夢，擁有甜甜價的甜甜飲料之旅',
      itemChosen: '從微糖開始的新手螞蟻人之旅',
      chosenStartDate: '2021-01-31',
      chosenEndDate: '2021-02-02',
      price: 600,
      amount: 5,
    },
  ];
  console.log('amount', amount);

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
              <ShoppingCartCard items={cartItems} setAmount={setAmount} />
            </div>

            <h1 className="h3 mt-5 title">以下活動需要重新認證</h1>
            <div className="product-wrapper mt-3">
              <ShoppingCartCard items={cartOverItems} setAmount={setAmount} />
            </div>
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
