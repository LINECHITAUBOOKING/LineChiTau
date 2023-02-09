import './NormalSort.scss';

export default function NormalSort(props) {
  const { label, id, method } = props;

  return (
    <>
      <div className="ns-box d-flex align-items-center">
        <input type="checkbox" name={label} id={label} className="me-3" />
        <label for={label} className="me-3 my-p">
          {label}
        </label>
      </div>
    </>
  );
}
