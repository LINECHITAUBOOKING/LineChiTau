import './PlanDetails.scss';
import { useState, useEffect } from 'react';

export default function PlanDetails({
  content,
  setContent,
  notice,
  setNotice,
}) {
  const [ifContentBoxIsOpen, setIfContentBoxIsOpen] = useState(false);
  const [ifNoticeBoxIsOpen, setIfNoticeBoxIsOpen] = useState(false);

  console.log(`content:`, content);

  const contentJson = JSON.parse(content);
  console.log(`contentJson:`, contentJson);

  const noticeJson = JSON.parse(notice);
  console.log(`notice:`, notice);
  console.log(`noticeJSON:`, noticeJson);

  const contentTime = contentJson.time;
  const contentProp = contentJson.prop;
  const contentLocation = contentJson.location;

  let contentArray = [];

  if (contentTime.length > 1) {
    const contentArrayGroup = () => {
      for (let i = 0; i < contentTime.length; i++) {
        let group = {
          time: contentTime[i],
          prop: contentProp[i],
          location: contentLocation[i],
        };
        contentArray.push(group);
      }
    };
    contentArrayGroup();
    console.log('contentArray', contentArray);
  }

  console.log(
    `三種屬性 TRIP`,
    contentTime,
    `PROP`,
    contentProp,
    `Location`,
    contentLocation
  );

  const noticeWarning = noticeJson.warning;
  const noticeWearing = noticeJson.wearing;

  console.log(`二種屬性 Warning`, noticeWarning, `Wearing`, noticeWearing);

  function handleContentBox() {
    if (ifContentBoxIsOpen) {
      setIfContentBoxIsOpen(false);
    } else {
      setIfContentBoxIsOpen(true);
    }
  }

  // function handleNoticeBox() {
  //   if (ifNoticeBoxIsOpen) {
  //     setIfNoticeBoxIsOpen(false);
  //   } else {
  //     setIfNoticeBoxIsOpen(true);
  //   }
  // }

  function ContentDisplay({ time, prop, location }) {
    console.log(`傳入CONTENTDISPLAY的PROPS:`, time, prop, location);
    return (
      <>
        <div className="row time-and-prop-wrapper gx-2">
          <h5 className="prop col-4 d-flex justify-content-center align-items-center my-p">
            {prop}
          </h5>
          <p className="time col-8 d-flex justify-content-end">{time}</p>
        </div>
        <p className="location">{location}</p>
      </>
    );
  }

  return (
    <>
      <div className="plan-details">
        <div className="details-wrapper d-flex flex-column">
          <div className="details-container my-heading d-flex align-content-center justify-content-between">
            活動內容
            {/* <button
              className="material-symbols-outlined show-btn"
              onClick={() => {
                handleContentBox();
              }}
            >
              change_history
            </button> */}
          </div>
          <div
            className={
              ifContentBoxIsOpen ? `hidden-box not-hidden` : `hidden-box`
            }
          >
            {contentArray.map((item) => (
              <ContentDisplay
                time={item.time}
                prop={item.prop}
                location={item.location}
              />
            ))}
          </div>
          <div className="details-container my-heading d-flex align-content-center justify-content-between">
            注意事項
            {/* <button
              className="material-symbols-outlined show-btn"
              onClick={() => {
                handleNoticeBox();
              }}
            >
              change_history
            </button> */}
          </div>
          <div
            className={
              ifNoticeBoxIsOpen ? `hidden-box not-hidden` : `hidden-box`
            }
          >
            <ul>
              {noticeWarning.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
