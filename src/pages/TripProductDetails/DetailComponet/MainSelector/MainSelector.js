import '../../../../css/global-style.scss';
import './MainSelector.scss';
import PlanSelector from './PlanSelector/PlanSelector';
import PlanDetails from './PlanDetails/PlanDetails';

export default function MainSelector() {
  return (
    <>
      {/* <div className="mt-3 d-flex justify-content-between"> */}
      <div className="main-selector">
        <div className="title-and-clear-btn d-flex justify-content-between">
          <h3 className="title-underline box-title">選擇日期及方案</h3>
          <div className="round-btn">清除全部</div>
        </div>
        <p className="my-p">請選擇參加日期</p>
        <div className="time-selector-wrapper d-flex">
          <div className="preserved-date round-btn d-flex align-content-center justify-content-between">
            2022/12/29
            <span className="material-symbols-outlined show-btn my-p">
              change_history
            </span>
          </div>
          <div className="preserved-time round-btn d-flex align-content-center justify-content-between">
            14:30
            <span className="material-symbols-outlined show-btn my-p">
              change_history
            </span>
          </div>
        </div>
        <p className="my-p">請選擇方案類型</p>
        <div className="plan-wrapper d-flex flew-wrap">
          <PlanSelector planName="一日遊：十分＆夜九份" />
          <PlanSelector planName="一日遊：十分＆九份" />
          <PlanSelector planName="一日遊：野柳＆黃金瀑布" />
          {/* <div className="round-btn">一日遊：十分＆夜九份</div>
          <div className="round-btn">一日遊：十分＆九份</div>
          <div className="round-btn">一日遊：野柳＆黃金瀑布</div> */}
        </div>
        <p className="my-p">人數</p>
        <div className="preserved-amount-wrapper d-flex flex-wrap">
          <div className="preserved-amount adult d-flex justify-content-between">
            成人
            <div className="control-wrapper d-flex">
              <span className="material-symbols-outlined">add_circle</span>1
              <span className="material-symbols-outlined">
                do_not_disturb_on
              </span>
            </div>
          </div>
          <div className="preserved-amount kiddo d-flex justify-content-between">
            兒童
            <div className="control-wrapper d-flex">
              <span className="material-symbols-outlined">add_circle</span>1
              <span className="material-symbols-outlined">
                do_not_disturb_on
              </span>
            </div>
          </div>
          <div className="preserved-amount elder d-flex justify-content-between">
            長者
            <div className="control-wrapper d-flex">
              <span className="material-symbols-outlined">add_circle</span>1
              <span className="material-symbols-outlined">
                do_not_disturb_on
              </span>
            </div>
          </div>
        </div>
        <div className="final-total my-topic d-flex justify-content-between">
          NT$ 2400
          <div className="cart-and-buy d-flex justify-content-evenly">
            <div className="do-cart round-btn my-p d-flex align-items-center">
              放入購物車
            </div>
            <div className="do-buy round-btn my-p d-flex align-items-center">
              立即下單
            </div>
          </div>
        </div>
      </div>
      <PlanDetails
        PlanDescription={['test', 'test2']}
        PlanSuggestion="帶備用衣物"
        PlanDisclamer="費用不包含交通費"
      />
      {/* </div> */}
    </>
  );
}
