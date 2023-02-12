export default function AmountSelector({ setBuyingAmount, buyingAmount }) {
  return (
    <>
      <div className="control-wrapper d-flex">
        <button onClick={setBuyingAmount}>
          <span className="material-symbols-outlined">add_circle</span>
        </button>
        {buyingAmount}
        <button className="material-symbols-outlined" onClick={setBuyingAmount}>
          do_not_disturb_on
        </button>
      </div>
    </>
  );
}
