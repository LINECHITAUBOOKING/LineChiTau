import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useOutletContext,
} from 'react-router-dom';
import CheckOutItemListTabBody from './CheckOutItemListTab.js/CheckOutItemListTabBody';
import CheckOutItemListTabTitle from './CheckOutItemListTab.js/CheckOutItemListTabTitle';
import { useState } from 'react';

const CheckItemList = (props) => {
  console.log(props);
  const [currentTab, setCurrentTab] = useState(1);
  const handleTabClick = (tabClick) => {
    setCurrentTab(tabClick);
  };
  var subTotal = 0;
  return (
    <>
      <div className="sub-section h-100 row justify-content-center justify-content-between  mb-3 px-3  mx-0">
        <div className="items-tabs d-flex flex-column row col-4 py-3 mx-0">
          {props.cartItems.map((cartItem, index) => (
            <CheckOutItemListTabTitle
              key={index}
              id={cartItem.itemId}
              title={cartItem.itemName}
              updateTab={handleTabClick}
            />
          ))}

          <div className="sub-detail py-2 mb-2">行程1</div>
        </div>
        <div className="items col-8 py-3 mx-0">
          {props.cartItems.map((cartItem, index) => (
            <CheckOutItemListTabBody
              key={index}
              currentTab={currentTab}
              id={cartItem.itemId}
              itemName={cartItem.itemName}
              itemChosen={cartItem.itemChosen}
              price={cartItem.price}
              amount={cartItem.amount}
              chosenStartDate={cartItem.chosenStartDate}
              chosenEndDate={cartItem.chosenEndDate}
            ></CheckOutItemListTabBody>
          ))}
        </div>
        <div className="sub-total sub-price d-flex justify-content-between mb-3 align-items-center px-3">
          {' '}
          總計：{' '}
          <span>
            {props.cartItems.map((cartItem, index) => {
              subTotal += parseInt(cartItem.price * cartItem.amount);
            })}
            {subTotal} 元
          </span>
        </div>
      </div>
    </>
  );
};
export default CheckItemList;
