export default function TripIntro({ tripIntroduction, introPic, picIntro }) {
  let figureArr = [];

  // if (introPic.length > 5) {
  //   let introPicArr = introPic.split(`,`);
  //   let picIntroArr = picIntro.split(`,`);

  //   const makeFigureObj = () => {
  //     for (let i = 0; introPicArr.length > 0; i++) {
  //       let group = {};
  //       group.pic = introPicArr[i];
  //       group.intro = picIntroArr[i];
  //       figureArr.push(group);
  //     }
  //     console.log(`figureArr:`, figureArr);
  //   };
  //   makeFigureObj();
  // }

  // function FigureAndImg({ pic, intro }) {
  //   return (
  //     <>
  //       <figure>
  //         <img src={`/images/${pic}`} alt={`風景優美的旅遊景點趙`} />
  //         <figcaption>{intro}</figcaption>
  //       </figure>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="product-description collapsable-block">
        <div className="collapse-controll d-flex justify-content-between">
          <h3 className="box-title title-underline">活動介紹</h3>
          <button>
            <span className="material-symbols-outlined show-btn">
              change_history
            </span>
          </button>
        </div>
        <div className="intro">{tripIntroduction}</div>
      </div>
    </>
  );
}
