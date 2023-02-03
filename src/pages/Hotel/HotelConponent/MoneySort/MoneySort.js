import React from 'react';

function HotelServiceSort({ roomPriceArray }) {
  return (
    <>
      {roomPriceArray.map((price, price_i) => {
        if (price.to === Number.MAX_SAFE_INTEGER) {
          price.to = '以上';
        }
        return (
          <div className="d-flex align-items-center my-3" key={price_i}>
            <input type="radio" name="price" checked className="me-3" />
            <label for="price" className="me-3 my-p">
              {`${price.from} - ${price.to}`}
            </label>
          </div>
        );
      })}
    </>
  );
}

export default HotelServiceSort;
