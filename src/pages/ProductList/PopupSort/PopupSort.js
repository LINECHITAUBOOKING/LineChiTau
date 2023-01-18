import NormalSort from '../NormalSort/NormalSort';
import './PopupSort.scss';

export default function PopupSort(props) {
  const { label, area } = props;

  const northernList = [
    '基隆市',
    '宜蘭縣',
    '新北市',
    '台北市',
    '桃園市',
    '新竹縣',
    '新竹市',
  ];
  const centralList = ['苗栗縣', '台中市', '彰化縣', '南投縣', '雲林縣'];
  const souternList = ['嘉義縣', '台南市', '高雄市', '屏東縣'];
  const easternList = ['台東縣', '花蓮縣'];
  const islandList = ['澎湖', '金門', '馬祖', '蘭嶼'];
  const northernItems = northernList.map((v) => <NormalSort label={v} />);
  const centralItems = centralList.map((v) => <NormalSort label={v} />);
  const souternItems = souternList.map((v) => <NormalSort label={v} />);
  const easternItems = easternList.map((v) => <NormalSort label={v} />);
  const islandItems = islandList.map((v) => <NormalSort label={v} />);

  switch (area) {
    case 'nothern':
      return (
        <>
          <div className="area d-flex align-items-center position-relative">
            <input type="checkbox" name={label} id={label} className="me-3" />
            <label for={label} className="me-3 my-p">
              {label}
            </label>
            <span class="arrow-right material-symbols-outlined">
              arrow_right
            </span>
            <div className="counties-wrapper position-absolute">
              {northernItems}
            </div>
          </div>
        </>
      );
    case 'central':
      return (
        <>
          <div className="area d-flex align-items-center position-relative">
            <input type="checkbox" name={label} id={label} className="me-3" />
            <label for={label} className="me-3 my-p">
              {label}
            </label>
            <span class="arrow-right material-symbols-outlined">
              arrow_right
            </span>
            <div className="counties-wrapper position-absolute d-flex align-items-center">
              {centralItems}
            </div>
          </div>
        </>
      );
    case 'southern':
      return (
        <>
          <div className="area d-flex align-items-center position-relative">
            <input type="checkbox" name={label} id={label} className="me-3" />
            <label for={label} className="me-3 my-p">
              {label}
            </label>
            <span class="arrow-right material-symbols-outlined">
              arrow_right
            </span>
            <div className="counties-wrapper position-absolute">
              {souternItems}
            </div>
          </div>
        </>
      );
    case 'eastern':
      return (
        <>
          <div className="area d-flex align-items-center position-relative">
            <input type="checkbox" name={label} id={label} className="me-3" />
            <label for={label} className="me-3 my-p">
              {label}
            </label>
            <span class="arrow-right material-symbols-outlined">
              arrow_right
            </span>
            <div className="counties-wrapper position-absolute">
              {easternItems}
            </div>
          </div>
        </>
      );
    case 'island':
      return (
        <>
          <div className="area d-flex align-items-center position-relative">
            <input type="checkbox" name={label} id={label} className="me-3" />
            <label for={label} className="me-3 my-p">
              {label}
            </label>
            <span class="arrow-right material-symbols-outlined">
              arrow_right
            </span>
            <div className="counties-wrapper position-absolute">
              {islandItems}
            </div>
          </div>
        </>
      );
    default:
      return <div>請在props area內輸入相對應的case</div>;
  }
}
