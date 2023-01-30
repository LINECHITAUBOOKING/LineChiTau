import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import pic1 from './images/pic1.png';
import { motion, Reorder } from 'framer-motion';
import { useQuery } from 'react-query';
import { JwtCsrfTokenContext } from '../../../../utils/csrf-hook/useJwtCsrfToken';
import TListLayout from './Spinner/TListLayout';
const TList = ({ value }) => {
  const { jwtToken } = useContext(JwtCsrfTokenContext);
  console.log(jwtToken);
  const [items, setItems] = useState({});

  const getUser = async ({ queryKey }) => {
    const response = await fetch('https://reqres.in/api/users?page=2');
    // const response = await fetch('./users.json');
    const list = await response.json();
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
  const [listIndex, setListIndex] = useState(0);
  const [buttonStatus, setbuttonStatus] = useState(true);
  const handleClick = () => {
    if (buttonStatus === true) {
      setListIndex(listIndex - 3);
      setbuttonStatus(false);
    } else {
      setListIndex(listIndex + 3);
      setbuttonStatus(true);
    }
  };
  console.log(items);
  // console.log(items);
  if (isLoading) {
    return (
      <>
        <span>Loading...</span>
      </>
    );
  }
  if (isFetching) {
    return <>加載中</>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
 /*  if (!jwtToken) {
    return (
      <>
        <TListLayout />
        <Link to="/login" className="TListSpinner">
          <button className="my-btn ">請登入</button>
        </Link>
      </>
    );
  } */
  // if (data && data.data) {
  //   return <></>;
  // }

  return (
    <>
      {/* <Reorder.Group value={value} dragListener={false} dragControls={controls}> */}
      {items.map((item, index) => {
        if (index + listIndex >= 3) {
          return;
        }
        return (
          <div className=" overlap-group-1">
            <img
              className="rectangle-1911"
              src={item.avatar}
              alt="Rectangle 1911"
            />
            <div className="text">
              <div className="notosans-normal-old-copper-20px">{item.id}</div>
              <div className="notosans-normal-sepia-16px">2022-12-31 15:00</div>
              <div className="notosans-normal-sepia-16px">
                實付金額：NT$ 7200
              </div>
            </div>

            <div className="button">
              <Link key={item.i} to={`/profile/listdetail/${item.id}`}>
                <button
                  // onClick={() => {
                  //   setlistid({ listid: v.id, propsOrNot: !false });
                  // }}
                  // listid={listid}
                  className=" button-1 notosans-normal-old-copper-16px"
                >
                  查看憑證
                </button>
              </Link>
              <button className="button-1 notosans-normal-old-copper-16px">
                撰寫評價
              </button>
            </div>
          </div>
        );
      })}
      <button className="my-btn" onClick={handleClick}>
        {buttonStatus ? `ViewMore` : `ViewLess`}
      </button>
      {/* </Reorder.Group> */}
    </>
  );
};

export default TList;
