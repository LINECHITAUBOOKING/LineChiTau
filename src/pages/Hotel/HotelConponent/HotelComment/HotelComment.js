import axios from 'axios';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Rating } from 'react-simple-star-rating';
import { JwtCsrfTokenContext } from '../../../../utils/csrf-hook/useJwtCsrfToken';
import CommentPicture from '../CommentPicture/CommentPicture';
import './HotelComment.scss';

function HotelComment({ hotelDetail }) {
  const { jwtToken, init, jwtDecodedData } = useContext(JwtCsrfTokenContext);
  init(axios);
  const beImagePath = 'http://localhost:3001/';
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);
  const handleRating = (rate: number) => {
    setRating(rate);
  };
  const onPointerEnter = () => console.log('Enter');
  const onPointerLeave = () => console.log('Leave');
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

  const handleReset = () => {
    setRating(0);
  };
  const [selectedFiles, setSelectedFiles] = useState([]);
  // console.log('selectedFiles', selectedFiles);
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    // console.log(selectedFiles);
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedFiles(selectedFiles);
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };
  const handleSubmission = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Array.from(selectedFiles).map((file) => {
      formData.append('photos', file);
    });
    formData.append('rating', rating);
    formData.append('user', jwtDecodedData.email);
    formData.append('comment_text', commentText);
    formData.append('company_name', hotelDetail.company_name);

    (async () => {
      let result = await axios.post(
        'http://localhost:3000/auth/postHotelComment',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
    })();
    setCommentText('');
    // setSelectedFiles([]);
  };
  const handleRemovePreview = (index) => {
    selectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="container-xxl comment-for-hotel">
      <h2 className="title">評論區</h2>
      <form onSubmit={handleSubmission}>
        <Rating
          initialValue={0}
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
        />
        <div className="d-flex">
          <p>{jwtDecodedData.email}</p>
          <textarea
            onChange={(e) => {
              setCommentText(e.target.value);
            }}
            value={commentText}
          />
        </div>
        <p className="my-p">上傳圖片</p>
        {/* <CommentPicture setSelectedFiles={setSelectedFiles} /> */}
        <div>
          <div className="comment-preview-picture d-flex m-3">
            {selectedImages &&
              selectedImages.map((image, index) => {
                return (
                  <div className="" key={image}>
                    <div className="add-pic-box my-border-radius me-2">
                      <label className="add-pic my-border-radius ">
                        <input
                          type="file"
                          name="images"
                          className="d-none"
                          onChange={onSelectFile}
                          multiple
                        />
                        <img src={image} alt={image} height="100" width="100" />
                      </label>
                    </div>
                    <button
                      className="my-btn my-p"
                      onClick={(index) => {
                        setSelectedImages(
                          selectedImages.filter((e) => {
                            // console.log(e);
                            return e !== image;
                          })
                        );
                        handleRemovePreview(index);
                      }}
                    >
                      移除
                    </button>
                  </div>
                );
              })}
            <label className="add-pic-box my-border-radius me-2">
              <span class="material-symbols-outlined add-btn">add_circle</span>
              <input
                type="file"
                name="images"
                className="d-none"
                onChange={onSelectFile}
                multiple
              //   accept="image/png, image/jpg, image.jpeg,image/webp"
              />
            </label>
          </div>
        </div>
        <div className="">
          <button className="my-btn my-p" type="submit" onClick={handleReset}>
            送出
          </button>
        </div>
      </form>
    </div>
  );
}

export default HotelComment;
