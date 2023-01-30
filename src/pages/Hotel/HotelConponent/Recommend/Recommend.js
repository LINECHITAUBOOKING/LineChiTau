import React from 'react';
import logo from '../../img/cute-cat.jpg';

const Recommend = () => {
  return (
    <>
      <div className="recommend container-xxl pt-5 pb-2">
        <div className="words d-flex justify-content-center">
          <div className="mx-5">
            <img src={logo} alt="logo" width="500" />
          </div>
          <div className="pt-5 mx-5">
            <h4 className="my-heading pb-4">選擇來七桃</h4>
            <p className="pt-2">aaaaaaaaaaaaaaaaaaaa</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommend;
