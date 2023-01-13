import React from 'react';
import './Step.scss';

export default function Step(props) {
  console.log(props);
  return (
    <>
      <div className={'stepBlock' + (props.selected ? ' selected' : '')}>
        <div
          className="circleWrapper"
          onClick={() => props.updateStep(props.index + 1)}
        >
          <div className="circle"></div>
        </div>
        <span className="stepLabel">{props.label}</span>
      </div>
      <div
        className={
          props.index + 1 >= props.length
            ? null
            : 'line  flex-fill ' +
              (props.index + 1 < props.currentStep ? 'line-done' : '')
        }
      ></div>
    </>
  );
}
