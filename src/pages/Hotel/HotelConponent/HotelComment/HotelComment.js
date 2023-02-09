import axios from 'axios';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
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
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    images.forEach((image, i) => {
      formData.append(`image-${i}`, image);
    });
    const response = await axios.post('/api/upload', formData);
    const data = await response.json();
    console.log(data);
  };

  const handleChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  return (
    <div className="container-xxl comment-for-hotel">
      <h2 className="title">評論區</h2>
      <div className="comment-box"></div>
      <form onSubmit={handleSubmit}>
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
        <div className="mb-3">
          <label className="add-pic-box my-border-radius me-2">
            <span class="material-symbols-outlined add-btn">add_circle</span>
            <input
              type="file"
              className="d-none"
              onChange={handleChange}
              multiple
            />
          </label>
        </div>
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
