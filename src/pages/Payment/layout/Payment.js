import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import ProgressBar from '../PaymentComponent/ProgressBar';
function Payment() {
  const labelArray = ['選擇商品', '填寫資料', '完成付款'];
  const [currentStep, updateCurrentStep] = useState(1);

  function updateStep(step) {
    updateCurrentStep(step);
  }
  return (
    <>
      <ProgressBar
        labelArray={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}
      />
      <Outlet />
    </>
  );
}

export default Payment;
