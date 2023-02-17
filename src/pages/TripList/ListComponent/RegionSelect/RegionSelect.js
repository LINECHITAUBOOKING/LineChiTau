import './RegionSelect.scss';

export default function RegionSelect({ area, setRegionKeyword }) {
  const northernList = ['基隆', '宜蘭', '台北', '桃園', '新竹'];
  const centralList = ['苗栗', '台中', '彰化', '南投', '雲林'];
  const southernList = ['嘉義', '台南', '高雄', '屏東'];
  const easternList = ['台東', '花蓮'];
  const islandList = ['澎湖', '金門', '馬祖', '蘭嶼'];

  function handleRegionKeyword(item) {
    setRegionKeyword(item);
  }

  switch (area) {
    case '北部':
      return (
        <>
          <div className="area-box">
            {area}
            <br />
            {northernList.map((item) => (
              <button
                className="region-btn"
                onClick={() => {
                  handleRegionKeyword(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </>
      );
    case '中部':
      return (
        <>
          <div className="area-box">
            {area}
            <br />
            {centralList.map((item) => (
              <button
                className="region-btn"
                onClick={() => {
                  handleRegionKeyword(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </>
      );
    case '南部':
      return (
        <>
          <div className="area-box">
            {area}
            <br />
            {southernList.map((item) => (
              <button
                className="region-btn"
                onClick={() => {
                  handleRegionKeyword(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </>
      );
    case '東部':
      return (
        <>
          <div className="area-box">
            {area}
            <br />
            {easternList.map((item) => (
              <button
                className="region-btn"
                onClick={() => {
                  handleRegionKeyword(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </>
      );
    case '離島':
      return (
        <>
          <div className="area-box">
            {area}
            <br />
            {islandList.map((item) => (
              <button
                className="region-btn"
                onClick={() => {
                  handleRegionKeyword(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </>
      );
    default:
      return <p>有錯喔</p>;
  }
}
