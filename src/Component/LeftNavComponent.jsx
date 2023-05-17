import React, { useState, useEffect } from "react";
import LeftNav from "../Pages/LeftNav";

const LeftNavComponent = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1234/leftmenu")
      .then((res) => res.json())
      .then((serRes) => {
        setMenu(serRes);
      });
  }, []);
  return (
    <>
      {menu?.map((menulist) => {
        return (
          <LeftNav
            key={menulist?.id}
            menu_name={menulist?.name}
            menu_image={menulist?.image}
          />
        );
      })}
    </>
  );
};

export default LeftNavComponent;
