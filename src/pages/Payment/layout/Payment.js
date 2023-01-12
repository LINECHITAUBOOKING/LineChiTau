import { Outlet, Link } from 'react-router-dom';
import ProgressBar from '../PaymentComponent/ProgressBar';
function Payment() {
  return (
    <>
      <ProgressBar />
      <Outlet />
    </>
  );
}

export default Payment;
