import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import pic1 from './images/pic1.png';
import pic2 from './images/pic2.png';
import place from './images/place.png';
import coin from './images/coin.png';
import './Mylove.scss';
import { useQuery } from 'react-query';
import { JwtCsrfTokenContext } from '../../../../utils/csrf-hook/useJwtCsrfToken';
// import TListLayout from './Spinner/TListLayout';
const Mylove = () => {
  const { jwtToken, userF } = useContext(JwtCsrfTokenContext);
  console.log('userF', userF.email);
  console.log(jwtToken);
  const [items, setItems] = useState({});

  const getUser = async ({ queryKey }) => {
    // const response = await fetch(
    //   `https://reqres.in/api/users?page=${userF.name}`
    // );

    const response = await fetch(
      `http://localhost:3001/api/userlist/list/${userF.email}`
    );
    // const response = await fetch('./users.json');
    console.log('收到', response);
    const list = await response.json();
    console.log(list);
    setItems(list.data);
    return list;
  };
  const {
    data: list,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery(['listdata', items], getUser, {
    // refetchOnWindowFocus: false,s
    retry: 0,
    // cacheTime: 1000,
    // enabled: false,
  });
  return (
    <div className="container-mylove">
      <div className="prefertitle valign-text-middle notosans-normal-old-copper-32px">
        我的最愛
      </div>
      <div className="preferlist">
        <div className="overlap-group-3">
          <img className="rectangle-82" src={pic2} alt="Rectangle 82" />
          <div className="surname-1">Snow Hills</div>
          <p className="great-skiing-opportu-1 notosans-bold-old-copper-14px">
            Great skiing opportunity with a beautiful view
          </p>
          <div className="group-98-1">
            <img className="place" src={place} alt="place" />
            <div className="carpati-ukraine-1 notosans-bold-old-copper-14px">
              Carpati., Ukraine
            </div>
            <div className="group-96">
              <img className="coin-1" src={coin} alt="coin" />
              <div className="number-1">75/ person</div>
            </div>
          </div>
        </div>
        <div className="overlap-group-3">
          <img className="rectangle-82" src={pic2} alt="Rectangle 82" />
          <div className="surname-1">Snow Hills</div>
          <p className="great-skiing-opportu-1 notosans-bold-old-copper-14px">
            Great skiing opportunity with a beautiful view
          </p>
          <div className="group-98-1">
            <img className="place" src={place} alt="place" />
            <div className="carpati-ukraine-1 notosans-bold-old-copper-14px">
              Carpati., Ukraine
            </div>
            <div className="group-96">
              <img className="coin-1" src={coin} alt="coin" />
              <div className="number-1">75/ person</div>
            </div>
          </div>
        </div>
        <div className="overlap-group-3">
          <img className="rectangle-82" src={pic2} alt="Rectangle 82" />
          <div className="surname-1">Snow Hills</div>
          <p className="great-skiing-opportu-1 notosans-bold-old-copper-14px">
            Great skiing opportunity with a beautiful view
          </p>
          <div className="group-98-1">
            <img className="place" src={place} alt="place" />
            <div className="carpati-ukraine-1 notosans-bold-old-copper-14px">
              Carpati., Ukraine
            </div>
            <div className="group-96">
              <img className="coin-1" src={coin} alt="coin" />
              <div className="number-1">75/ person</div>
            </div>
          </div>
        </div>
      </div>
      <div className="preferlist">
        <div className="overlap-group-3">
          <img className="rectangle-82" src={pic2} alt="Rectangle 82" />
          <div className="surname-1">Snow Hills</div>
          <p className="great-skiing-opportu-1 notosans-bold-old-copper-14px">
            Great skiing opportunity with a beautiful view
          </p>
          <div className="group-98-1">
            <img className="place" src={place} alt="place" />
            <div className="carpati-ukraine-1 notosans-bold-old-copper-14px">
              Carpati., Ukraine
            </div>
            <div className="group-96">
              <img className="coin-1" src={coin} alt="coin" />
              <div className="number-1">75/ person</div>
            </div>
          </div>
        </div>
        <div className="overlap-group-3">
          <img className="rectangle-82" src={pic2} alt="Rectangle 82" />
          <div className="surname-1">Snow Hills</div>
          <p className="great-skiing-opportu-1 notosans-bold-old-copper-14px">
            Great skiing opportunity with a beautiful view
          </p>
          <div className="group-98-1">
            <img className="place" src={place} alt="place" />
            <div className="carpati-ukraine-1 notosans-bold-old-copper-14px">
              Carpati., Ukraine
            </div>
            <div className="group-96">
              <img className="coin-1" src={coin} alt="coin" />
              <div className="number-1">75/ person</div>
            </div>
          </div>
        </div>
        <div className="overlap-group-3">
          <img className="rectangle-82" src={pic2} alt="Rectangle 82" />
          <div className="surname-1">Snow Hills</div>
          <p className="great-skiing-opportu-1 notosans-bold-old-copper-14px">
            Great skiing opportunity with a beautiful view
          </p>
          <div className="group-98-1">
            <img className="place" src={place} alt="place" />
            <div className="carpati-ukraine-1 notosans-bold-old-copper-14px">
              Carpati., Ukraine
            </div>
            <div className="group-96">
              <img className="coin-1" src={coin} alt="coin" />
              <div className="number-1">75/ person</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mylove;
