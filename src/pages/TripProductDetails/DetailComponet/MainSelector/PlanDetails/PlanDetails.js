import './PlanDetails.scss';

export default function PlanDetails({ content, notice }) {
  console.log('PlanDetails裏頭content', content);
  console.log('PlanDetails裏頭notice', notice);

  // const planContent = JSON.parse(content);
  // const planNotice = JSON.parse(notice);

  // console.log('COntentJSOn', planContent.time);
  return (
    <>
      <div className="plan-details">
        <div className="details-wrapper d-flex flex-column">
          <div className="details-container my-heading d-flex align-content-center justify-content-between">
            方案詳情
            <button className="material-symbols-outlined show-btn">
              change_history
            </button>
          </div>
          <div className="hidden-box"></div>
          <div className="collapse-details"></div>
          <div className="details-container my-heading d-flex align-content-center justify-content-between">
            訂購須知
            <button className="material-symbols-outlined show-btn">
              change_history
            </button>
          </div>
          <div className="collapse-details"></div>
        </div>
      </div>
    </>
  );
}
