import React from "react";

const UserInfo = props => {
  const {
    match: { params },
    location: {
      state: { user }
    }
  } = props;
  console.log(props);
  return (
    <div>
      <span>{user.id.value}</span>
      <span>{params.id}</span>
      <h1>{user.name.first + " " + user.name.last}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};
export default UserInfo;
