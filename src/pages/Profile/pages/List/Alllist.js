import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import pic1 from './images/pic1.png';
import { motion, Reorder } from 'framer-motion';
import { useQuery } from 'react-query';
import { JwtCsrfTokenContext } from '../../../../utils/csrf-hook/useJwtCsrfToken';
import TListLayout from './Spinner/TListLayout';
import Pagination from '../../../layouts/Pagination';
import './Alllist.scss';
const Alllist = ({ value }) => {
  const { jwtToken, userF,jwtDecodedData } = useContext(JwtCsrfTokenContext);
  console.log('userF', userF.email);
  console.log(jwtToken);
  const [items, setItems] = useState({});

  const getUser = async ({ queryKey }) => {
    // const response = await fetch(
    //   `https://reqres.in/api/users?page=${userF.name}`
    // );

    const response = await fetch(
      `http://localhost:3001/api/userlist/list/${jwtDecodedData.email}`
    );
    // const response = await fetch('./users.json');
    console.log('收到', response);
    const list = await response.json();
    console.log('list', list);
    setItems(list);
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
  console.log(items);

  //page
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  console.log(lastPostIndex, firstPostIndex);
  let itemsArray;
  if (items !== undefined) {
    itemsArray = Object.values(items);
  }
  console.log(itemsArray);
  if (itemsArray === undefined) {
    return (
      <>
        <span>查無資料</span>
      </>
    );
  }

  if (itemsArray.error) {
    return (
      <>
        <span>找不到訂單</span>
      </>
    );
  }
  const currentPosts = itemsArray.slice(firstPostIndex, lastPostIndex);

  if (currentPosts === '找不到訂單') {
    return (
      <>
        <span>找不到訂單</span>
      </>
    );
  }
  console.log(currentPosts);

  if (isLoading) {
    return (
      <>
        <span>Loading...</span>
      </>
    );
  }
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
  if (!jwtToken) {
    return (
      <>
        <TListLayout />
        <Link to="/login" className="TListSpinner">
          <button className="my-btn ">請登入</button>
        </Link>
      </>
    );
  }
  // if (data && data.data) {
  //   return <></>;
  // }

  return (
    <>
      <div className="container-alllist">
        <h1 className="buytitle valign-text-middle notosans-normal-old-copper-32px">
          全部清單
        </h1>
        <div className="buylist-alllist">
          <div className="buylist-items-alllist">
            {currentPosts.map((item, index) => {
              return (
                <div className=" overlap-group-1">
                  <img
                    className="rectangle-1911"
                    src={item.avatar}
                    alt="Rectangle 1911"
                  />
                  <div className="text">
                    <div className="notosans-normal-old-copper-20px">
                      {item.id}
                    </div>
                    <div className="notosans-normal-sepia-16px">
                      2022-12-31 15:00
                    </div>
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
                        查看更多
                      </button>
                    </Link>
                    <button className="button-1 notosans-normal-old-copper-16px">
                      撰寫評價
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Pagination
          totalPosts={items.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Alllist;
