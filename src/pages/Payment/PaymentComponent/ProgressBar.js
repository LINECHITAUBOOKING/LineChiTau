import React from 'react';
import '../layout/ProgressBar.scss';
import Step from './StepProgressBar/Step';
const ProgressBar = (props) => {
  return (
    <>
      <div className="container main-width step-bar d-flex flex-row  align-items-center justify-content-between mt-3 px-3">
        {props.labelArray.map((item, index) => (
          <Step
            key={index}
            index={index}
            label={item}
            updateStep={props.updateStep}
            currentStep={props.currentStep}
            selected={props.currentStep === index + 1}
            length={props.labelArray.length}
          ></Step>
        ))}
      </div>
      {/* <!-- TODO 流程條 -->
      <div className="container main-width step-bar d-flex flex-row  align-items-center justify-content-evenly mt-3">
        <div className="d-flex align-items-center justify-content-center mx-2">
          <div className="step-done"></div>
          <span className="mx-2 fs-4">選擇商品</span>
        </div>
        <div className="line line-done flex-fill"></div>
        <div className="d-flex align-items-center justify-content-center mx-2">
          <div className="step-done"></div>
          <span className="mx-2 fs-4">填寫資料</span>
        </div>
        <div className="line line-done flex-fill"></div>
        <div className="d-flex align-items-center justify-content-center mx-2">
          <div className="step-doing d-flex align-items-center justify-content-center">
            <div className="step-doing-center"></div>
          </div>
          <span className="mx-2 fs-4">完成付款</span>
        </div>
      </div> */}
    </>
  );
};

export default ProgressBar;
