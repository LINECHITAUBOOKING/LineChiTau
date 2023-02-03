import React from 'react';

function HotelServiceSort({ hotelServiceListArray }) {
  return (
    <>
      {hotelServiceListArray.map((hotelService, hotelService_i) => {
        return (
          <div className="ns-box d-flex my-2" key={hotelService_i}>
            <input
              type="checkbox"
              name={hotelService}
              id={hotelService}
              className="me-3"
            />
            <label for={hotelService} className="me-3 my-p">
              {hotelService}
            </label>
          </div>
        );
      })}
    </>
  );
}

export default HotelServiceSort;
