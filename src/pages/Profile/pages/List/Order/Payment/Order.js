import axios from 'axios';
import { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function Order(props) {
  const [order, setOrder] = useState({});

  const [productName1, setProductName1] = useState('測試商品1');
  const [price1, setPrice1] = useState(100);
  const [quantity1, setQuantity1] = useState(1);

  const [productName2, setProductName2] = useState('測試商品2');
  const [price2, setPrice2] = useState(100);
  const [quantity2, setQuantity2] = useState(2);

  const handleLinePay = () => {
    confirmAlert({
      title: '確認付款',
      message: '確認要導向至LINE Pay進行付款？',
      buttons: [
        {
          label: '確定',
          onClick: () => {
            // 在本window直接導至node付款(reverse)url，之後會導向至line pay
            window.location.href = '/api/pay/reserve?orderId=' + order.orderId;
            console.log(
              window.location.href,
              process.env.REACT_APP_PAYMENT_API_URL
            );
          },
        },
        {
          label: '取消',
          onClick: () => {},
        },
      ],
    });
  };

  const createOrder = async () => {
    // 送至server建立訂單，packages與order id由server產生
    // products將會組合在packages屬性之下
    const response = await axios.post(`/api/pay/create-order`, {
      amount: quantity1 * price1 + quantity2 * price2,
      products: [
        {
          id: 'prod1',
          name: productName1,
          quantity: quantity1,
          price: price1,
        },
        {
          id: 'prod2',
          name: productName2,
          quantity: quantity2,
          price: price2,
        },
      ],
    });

    // TODO: try-catch錯誤處理
    setOrder(response.data);
  };

  return (
    <>
      <h1>購買商品清單</h1>
      <p>
        訂單JSON結構參考`order-demo-only.json`檔案，packages id與order
        id將由server產生
      </p>
      <div>
        id=prod1 商品名稱:
        <br />
        <input
          type="text"
          name="productName1"
          value={productName1}
          onChange={(e) => {
            setProductName1(e.target.value);
          }}
        />
        數量:
        <input
          type="number"
          name="quantity1"
          value={quantity1 === 0 ? '' : quantity1}
          onChange={(e) => {
            setQuantity1(Number(e.target.value));
          }}
        />
        單價:
        <input
          type="number"
          name="price1"
          value={price1 === 0 ? '' : price1}
          onChange={(e) => {
            setPrice1(Number(e.target.value));
          }}
        />
        <br />
        小計: {quantity1 * price1}
      </div>
      <hr />
      <div>
        id=prod2 商品名稱:
        <br />
        <input
          type="text"
          name="productName2"
          value={productName2}
          onChange={(e) => {
            setProductName2(e.target.value);
          }}
        />
        數量:
        <input
          type="number"
          name="quantity2"
          value={quantity2 === 0 ? '' : quantity2}
          onChange={(e) => {
            setQuantity2(Number(e.target.value));
          }}
        />
        單價:
        <input
          type="number"
          name="price2"
          value={price2 === 0 ? '' : price2}
          onChange={(e) => {
            setPrice2(Number(e.target.value));
          }}
        />
        <br />
        小計: {quantity2 * price2}
      </div>
      <br />
      總價: {quantity1 * price1 + quantity2 * price2}
      <button onClick={createOrder}>產生訂單</button>
      <hr />
      <h2>訂單明細</h2>
      <p>Order ID: {order.orderId}</p>
      <p>總金額: {order.orderId && order.amount}</p>
      {order.orderId &&
        order.packages[0].products.map((v, i) => {
          return (
            <div key={i}>
              {v.name}/{v.quantity}/{v.price}
            </div>
          );
        })}
      <img
        alt=""
        src={`${process.env.REACT_APP_REACT_URL}/linepay/LINE-Pay(h)_W85_n.png`}
      />
      <button
        onClick={handleLinePay}
        // 限制有orderId產生後才能點按
        disabled={!order.orderId}
      >
        前往付款
      </button>
    </>
  );
}

export default Order;
