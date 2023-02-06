import React from 'react';
import './SummaryNav.scss';

const SummaryNav = ({listItems=['客房','地圖','評論區','注意事項']}) => {
  
  const NavItems = listItems.map((v)=><li>{v}</li>)
  const LiStyle = {
    margin: 0,
  }

  return (
    <>
      <nav>
        <ul className="list-unstyled d-flex justify-content-around p-2 align-content-center" style={LiStyle}>
          {NavItems}
        </ul>
      </nav>
    </>
  );
};

export default SummaryNav;
