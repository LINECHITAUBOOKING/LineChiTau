import React from 'react';
function CheckOutItemListTabTitle(props) {
  return (
    <>
      <div
        className="sub-detail py-2 mb-2"
        onClick={() => {
          props.updateTab(props.id);
        }}
      >
        {props.title}
      </div>
    </>
  );
}

export default CheckOutItemListTabTitle;
