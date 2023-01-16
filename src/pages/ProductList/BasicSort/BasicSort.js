import './sort.scss';

export default function BasicSort(props) {
  console.log(props);
  const { text } = props;
  return (
    <>
      <div className="sort-wrapper d-flex justify-conetent-center align-items-center">
        <p>{text}</p>
      </div>
    </>
  );
}
