import React from 'react';
import { useState } from 'react';
import './PopularCategory.scss';
import pic1 from '../../img/Hotel1/rocky-banner.jpg';
import pic2 from '../../img/Hotel1/rocky-DBL.jpg';

const PopularCategory = (props) => {
  const pictureList1 = [
    {
      order: 1,
      src: { pic1 },
    },
    {
      order: 2,
      src: { pic1 },
    },
    {
      order: 3,
      src: { pic1 },
    },
    {
      order: 4,
      src: { pic1 },
    },
    {
      order: 5,
      src: { pic1 },
    },
    {
      order: 6,
      src: { pic1 },
    },
    {
      order: 7,
      src: { pic1 },
    },
    {
      order: 8,
      src: { pic1 },
    },
  ];
  const [myTranslate, setMyTranslate] = useState({ x: 0, count: 0 });
  //上一次的位置
  const [lastTranslate, setLastTranslate] = useState(0);
  //一次位移的距離
  const siglePiece = 141;
  //控制整個DOM的位移
  const [pictureBoxStyle, setPictureBoxStyle] = useState({
    transform: `translateX(${myTranslate.x}px)`,
  });
  //控制VSCODE裡上面的DOM
  const [pictureList1Style, setPictureList1Style] = useState({
    transform: `translateX(${0}px)`,
  });
  //控制VSCODE裡下面的DOM
  const [pictureList2Style, setPictureList2Style] = useState({
    transform: `translateX(${0}px)`,
  });

  const moveLeft = function () {
    const newMyTranslate = { ...myTranslate };
    newMyTranslate.count--;
    newMyTranslate.x = newMyTranslate.count * siglePiece;
    setMyTranslate(newMyTranslate);
    setPictureBoxStyle({
      transform: `translateX(${newMyTranslate.x}px)`,
    });
    console.log('newMyTranslate.count', newMyTranslate.count);
    console.log('newMyTranslate.x', newMyTranslate.x);
    //如果位置在-141px 或 位置小於0且位置較上次減少1228
    if (newMyTranslate.x === -141) {
      console.log(
        'myTranslate.x - lastTranslate',
        newMyTranslate.x - lastTranslate
      );
      setPictureList2Style({
        transform: `translateX(${0}px)`,
      });
    } else if (
      newMyTranslate.x < 0 &&
      newMyTranslate.x - lastTranslate === -1128
    ) {
      console.log(
        'myTranslate.x - lastTranslate',
        newMyTranslate.x - lastTranslate
      );
      setLastTranslate(newMyTranslate.x);
      let countTranslate;
      console.log(Math.abs((newMyTranslate.count / 8) % 2));
      if (Math.abs((newMyTranslate.count / 8) % 2) !== 0) {
        countTranslate = 1;
        setPictureList1Style({
          transform: `translateX(${2256 * countTranslate}px)`,
        });
      } else if (Math.abs((newMyTranslate.count / 8) % 2) === 0) {
        console.log('有進來嗎');
        setPictureList2Style({
          transform: `translateX(${2256 * countTranslate}px)`,
        });
        // countTranslate++;
      }
    }
  };

  const moveRight = function () {
    if (
      myTranslate.x === 0 ||
      (myTranslate.x > 0 && myTranslate.x % 1128 === 0)
    ) {
      console.log(myTranslate.x - 2256);
    }
    const newMyTranslate = { ...myTranslate };
    newMyTranslate.count++;
    newMyTranslate.x = newMyTranslate.count * siglePiece;
    setMyTranslate(newMyTranslate);
    setPictureBoxStyle({
      transform: `translateX(${newMyTranslate.x}px)`,
    });
    setLastTranslate(newMyTranslate.x);
  };
  return (
    <>
      <div className="popular-category container-xxl pt-5 pb-2">
        <h4 className="title my-heading ms-5 mb-3">-熱門分類</h4>
        <div className="d-flex justify-content-center">
          <button className="arrow-btn-box" onClick={moveLeft}>
            <span className="material-symbols-outlined arrow-btn">
              arrow_back
            </span>
          </button>
          <div className="picture-list">
            <div
              className="picture-box d-flex justify-content-start"
              style={pictureBoxStyle}
            >
              {/* <div>
                <img
                  className="picture my-border-radius mx-2"
                  src={pic1}
                  alt="圖片1"
                />
                <p className="text-center">圖片1</p>
              </div> */}
              <div
                className="d-flex justify-content-start"
                style={pictureList1Style}
              >
                {pictureList1.map((v, i) => {
                  return (
                    <div key={v.order}>
                      <img
                        className="picture my-border-radius mx-2"
                        src={pic1}
                        alt={`圖片${v.order}`}
                      />
                      <p className="text-center">{`圖片${v.order}`}</p>
                    </div>
                  );
                })}
              </div>
              <div
                className="d-flex justify-content-start"
                style={pictureList2Style}
              >
                {pictureList1.map((v, i) => {
                  return (
                    <div key={v.order}>
                      <img
                        className="picture my-border-radius mx-2"
                        src={pic1}
                        alt={`圖片${v.order}`}
                      />
                      <p className="text-center">{`圖片${v.order}`}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button className="arrow-btn-box" onClick={moveRight}>
            <span className="material-symbols-outlined arrow-btn">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularCategory;
