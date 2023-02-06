import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import '../ComponentScss/CreditCard.scss';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useOutletContext,
} from 'react-router-dom';
const CheckOutCreditCard = (props) => {
  const [number, SetNumber] = useState('');
  const [name, SetName] = useState('');
  const [date, SetDate] = useState('');
  const [cvc, SetCvc] = useState('');
  const [focus, SetFocus] = useState('');
  return (
    <>
      <div className="credit-card-section row  py-5">
        <div className="credit-card col-6 px-4 my-5 d-flex justify-content-center ">
          <Cards
            className="rccs-size"
            number={number}
            name={name}
            expiry={date}
            cvc={cvc}
            focused={focus}
          />
        </div>
        <div className="crad-info col-6 px-5  my-5">
          <form>
            <div className="crad-type row py-2">
              <div className=" d-flex col-3  justify-content-end align-items-end">
                <label className=" pe-3">卡別</label>
              </div>
              <div className="col-7 px-0 ">
                <input type="text" className="form-control border-0  " />
              </div>
            </div>
            <div className="card-name row py-2">
              <div className=" d-flex col-3  justify-content-end align-items-end">
                <label className=" pe-3">持卡人姓名</label>
              </div>
              <div className="col-7 px-0">
                <input
                  type="text"
                  className="form-control border-0"
                  value={name}
                  name="name"
                  onChange={(e) => {
                    SetName(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                />
              </div>
            </div>
            <div className="card-number row py-2">
              <div className=" d-flex col-3  justify-content-end align-items-end">
                <label className=" pe-3">卡號</label>
              </div>
              <div className="col-7 px-0">
                <input
                  type="text"
                  className="form-control border-0"
                  value={number}
                  name="number"
                  maxLength={16}
                  onChange={(e) => {
                    SetNumber(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                />
              </div>
            </div>
            <div className="date-cvc row py-2">
              <div className=" d-flex col-3  justify-content-end align-items-end">
                <label className=" pe-3">有效日期</label>
              </div>
              <div className="col-2 px-0">
                <input
                  type="text"
                  name="expiry"
                  className="form-control border-0"
                  value={date}
                  onChange={(e) => {
                    SetDate(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                />
              </div>
              <div className=" d-flex col-3  justify-content-end align-items-end">
                <label className=" pe-3">安全碼</label>
              </div>
              <div className="col-2 px-0">
                <input
                  type="tel"
                  name="cvc"
                  className=" border-0 form-control"
                  value={cvc}
                  maxLength={3}
                  onChange={(e) => {
                    SetCvc(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckOutCreditCard;
