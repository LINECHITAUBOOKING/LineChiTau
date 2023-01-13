import { useState } from 'react';

function Test() {
  // [getter, setter]
  const [total, setTotal] = useState(0);

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        {total}
        {<div>目前total: {total}</div>}
      </h1>
      {/* 用truthy/falsy判斷 */}
      {total && <div>目前total: {total}</div>}
      {total !== 0 && <div>目前total: {total}</div>}
      {total > 0 && <div>目前total: {total}</div>}
      {/* 強制轉為布林值 */}
      {!!total && <div>目前total: {total}</div>}
    </>
  );
}

export default Test;
