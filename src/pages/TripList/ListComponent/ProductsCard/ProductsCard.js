import './ProductsCard.scss';
import pic3 from './dolphins_hotel.jpg';

export default function ProductCard({ tripName, introduction, region }) {
  const introJSON = JSON.parse(introduction);
  console.log(introJSON);
  const introText = introJSON.introduction;

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
          <h5 className="products-name nav-foot" title={tripName}>
            {tripName}
          </h5>
          <p className="description my-p" title={introText}>
            {introText}
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
              <p>{region}</p>
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
