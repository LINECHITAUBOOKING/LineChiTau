import { useState } from 'react';
import MyButton from './Mybutton';

function Counter() {
  // [getter, setter]
  const [total, setTotal] = useState(0);

  return (
    <>
      <h1>{total}</h1>
      <MyButton value={1} total={total} setTotal={setTotal} />
      <MyButton value={-1} total={total} setTotal={setTotal} />
      <MyButton value={2} total={total} setTotal={setTotal} />
      {/* <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button> */}
    </>
  );
}

export default Counter;
