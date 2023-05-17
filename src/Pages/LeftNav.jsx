import React from "react";

const LeftNav = ({ menu_id, menu_name, menu_image }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="d-flex ">
            <img src={menu_image} height={20} alt="Image Not Found" />
            <h6 className="px-3">{menu_name}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
