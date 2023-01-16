import React from 'react';
import '../layout/ProgressBar.scss';
import Step from './StepProgressBar/Step';
const ContactPerson = (props) => {
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
    </>
  );
};

export default ContactPerson;
