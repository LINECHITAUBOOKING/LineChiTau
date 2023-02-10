import axios from 'axios';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import CommentPicture from '../CommentPicture/CommentPicture';
import './HotelComment.scss';

function HotelComment() {
  const [rating, setRating] = useState(0);
  const handleRating = (rate: number) => {
    setRating(rate);
  };
  const onPointerEnter = () => console.log('Enter');
  const onPointerLeave = () => console.log('Leave');
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

  const [selectedFiles, setSelectedFiles] = useState([]);

  const [files, setFiles] = useState()

  const handleSubmission = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // 對照server上的名稱 req.files.photos
    // photoIds是用於改變新圖檔名稱用
    for (let i = 0; i < files.length; i++) {
      formData.append(`images[${i}]`, file[0]);

    }
    console.log(formData);
    // fetch(
    //   'http://localhost:5555/upload-photos', //server url
    //   {
    //     method: 'POST',
    //     body: formData,
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log('Success:', result);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };

  return (
    <div className="container-xxl comment-for-hotel">
      <h2 className="title">評論區</h2>
      <div className="comment-box"></div>
      <form onSubmit={handleSubmission}>
        <Rating
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
        />
        <div className="d-flex">
          <p>使用者名字</p>
          <textarea />
        </div>
        <p className="my-p">上傳圖片</p>
        <CommentPicture setFiles={setFiles} />
        <div className="">
          <button className="my-btn my-p" type="submit">
            送出
          </button>
        </div>
      </form>
    </div>
  );
}

export default HotelComment;
