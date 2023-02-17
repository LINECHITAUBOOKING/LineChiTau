import './ProductsCard.scss';
import { Link } from 'react-router-dom';
// import '../../../../../public/images/';

export default function ProductCard(props) {
  let { tripName, introduction, service, price_adu, grade, pic } = props;
  const introJSON = JSON.parse(introduction);
  const introText = introJSON.introduction;

  const picArr = pic.split(`,`);

  const pictureOfTrip = picArr[0];

  return (
    <>
      <div className="products-card-wrapper d-flex">
        <div className="products-card d-flex mb-4">
          <div>
            <img
              src={`/images/${pictureOfTrip}`}
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
              {service.map((value) => (
                <li>
                  <button className="tag my-border-radius my-p mx-1">
                    {value}
                  </button>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between my-p align-items-center">
              <div className="d-flex">
                <p className="d-flex align-items-center">
                  <span class="material-symbols-outlined">grade</span>
                  {'\t' + grade}
                </p>
              </div>
              <div className="d-flex">
                <p className="d-flex align-items-center">
                  <span className="material-symbols-outlined">
                    monetization_on
                  </span>
                  {'\t' + price_adu}
                </p>
              </div>
              <div className="d-flex">
                <p className="d-flex align-items-center">
                  <span class="material-symbols-outlined bookmark">
                    bookmark
                  </span>
                  收藏
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="products-card-link d-flex align-items-center justify-content-center">
          <Link to={`/TripProductDetails/${tripName}`}>
            馬
            <br />
            上
            <br />
            行
            <br />
            動
            <br />！
          </Link>
        </div>
      </div>
    </>
  );
}
