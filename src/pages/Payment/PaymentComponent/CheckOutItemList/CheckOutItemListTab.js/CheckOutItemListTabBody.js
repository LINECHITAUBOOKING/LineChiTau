import React, { useState } from 'react';

function CheckOutItemListTabBody(props) {
  return (
    <>
      <div
        className={
          'sub-detail p-3 mb-2 ' +
          (props.currentTab === props.id ? '' : 'd-none')
        }
      >
        {props.currentTab === props.id && (
          <div className="sub-detail p-3 mb-2">
            <h5>{props.itemName}</h5>
            <p>{props.itemChosen}</p>
            <h5>日期:{props.chosenStartDate}</h5>
            <h5>數量: x{props.amount}</h5>
            <div className="sub-price d-flex justify-content-between  ">
              小計 :<span>{props.amount * props.price} 元</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CheckOutItemListTabBody;
