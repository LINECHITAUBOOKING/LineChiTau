import './ProductsCard.scss';
import pic3 from './dolphins_hotel.jpg';

export default function ProductCard() {
  return (
    <>
      <div className="products-card d-flex mb-4">
        <div>
          <img
            src={pic3}
            className="products-card-pic my-border-radius"
            alt="pic3"
          ></img>
        </div>
        <div className="products-content mx-3 my-2">
          <h5 className="products-name nav-foot">娜路彎銀河酒店</h5>
          <p className="description my-p">
            娜路彎銀河酒店位於台東市，設有全年開放的室外泳池和 SPA
            中心。此住宿附設免費私人停車位。 此住宿距離台東火車站 10
            分鐘車程。此住宿距離鐵花村音樂聚落和台東鐵道藝術村。
          </p>
          <ul className="products-tag-list list-unstyled d-flex">
            <li>
              <button className="tag my-border-radius my-p mx-1">泳池</button>
            </li>
            <li>
              <button className="tag my-border-radius my-p mx-1">泳池</button>
            </li>
            <li>
              <button className="tag my-border-radius my-p mx-1">泳池</button>
            </li>
            <li>
              <button className="tag my-border-radius my-p mx-1">泳池</button>
            </li>
            <li>
              <button className="tag my-border-radius my-p mx-1">泳池</button>
            </li>
          </ul>
          <div className="d-flex justify-content-between my-p">
            <div className="d-flex">
              <div class="material-symbols-outlined">location_on</div>
              <p>台東市</p>
            </div>
            <div className="d-flex">
              <div class="material-symbols-outlined">monetization_on</div>
              <p>1000 / 晚</p>
            </div>
            <div className="d-flex">
              <div class="material-symbols-outlined bookmark">bookmark</div>
              <p>收藏</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
