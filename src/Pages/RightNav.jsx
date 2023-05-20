import React, { useState, useEffect } from "react";

const RightNav = () => {
  let [friend, setFriend] = useState([]);

  const getFriend = () => {
    fetch("http://localhost:1234/friends")
      .then((res) => res.json())
      .then((serRes) => {
        setFriend(serRes);
      });
  };
  useEffect(() => {
    getFriend();
  }, []);
  return (
    <div>
      <h3 className="text-center"> Friends</h3>
      {friend.map((frnd) => {
        return (
          <div key={frnd.id} className="d-flex p-2">
            <div className="ms-3">
              <img
                src={frnd.user_dp}
                alt={`image of ${frnd.name}`}
                height={40}
                width={40}
                className="rounded-circle"
              />{" "}
              <span
                className="acitve_status"
                style={
                  frnd.status === "active"
                    ? { color: "green" }
                    : { color: "gray" }
                }
              >
                {frnd.status === "active" ? "🟢" : "🟠"}
              </span>
            </div>
            <div className="ms-3">{frnd.name}</div>
            <div className="ms-3"></div>
          </div>
        );
      })}
    </div>
  );
};

export default RightNav;
