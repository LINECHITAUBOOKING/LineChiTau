import './MiniProductCard.scss';
export default function MiniProductCard() {
  //TODO 1.呈現產品圖片、產品名、方案名、方案單價、購買數量、方案總價

  //骨架

  return (
    <>
      <div className="card-wrapper">
        <div className="img-box">
          <img src="" alt="" className="picture" />
        </div>
        <div className="content-wrapper d-flex flex-column">
          <div className="content-name"></div>
          <div className="content-plan"></div>
          <div className="money-wrapper d-flex justify-content-between">
            <div className="amount-unit"></div>
            <div className="money-total"></div>
          </div>
        </div>
      </div>
    </>
  );
}
