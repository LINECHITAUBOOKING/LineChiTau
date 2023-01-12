import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pic1 from './images/pic1.png';

import { useQuery } from 'react-query';
const TList = () => {
  const getUser = async () => {
    const response = await fetch('https://reqres.in/api/users?page=2');
    // const response = await fetch('./users.json');
    const list = await response.json();
    return list;
  };
  // const [listid, setlistid] = useState(0);
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useQuery('listdata', getUser, {
    // refetchOnWindowFocus: false,s
    retry: 0,
    cacheTime: 1000,
  });
  /*   const queryCache = useQueryCache();

  const { mutate } = useMutation(data, getUser, {
    onSuccess: () => {
      queryCache.invalidateQueries('user');
    },
  }); */

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }



  // if (data && data.data) {
  //   return <></>;
  // }

  return (
    <>
      {list?.data.map((v, i) => {
        return (
          <div className="overlap-group-1">
            <img
              className="rectangle-1911"
              src={v.avatar}
              alt="Rectangle 1911"
            />
            <div className="text">
              <div className="notosans-normal-old-copper-20px">{v.id}</div>
              <div className="notosans-normal-sepia-16px">2022-12-31 15:00</div>
              <div className="notosans-normal-sepia-16px">
                實付金額：NT$ 7200
              </div>
            </div>

            <div className="button">
              <Link key={v.i} to={`/profile/listdetail/${v.id}`}>
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
    </>
  );
};

export default TList;
