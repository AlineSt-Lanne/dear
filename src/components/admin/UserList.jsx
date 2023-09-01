import "./styles/UserList.css";
import ScrollButton from "../home/ScrollButton";

import User from "./User";

function UserList() {
  return (
    <div className="container-user-list">
      <div className="users-pseudo-list">
        <User/>
        <ScrollButton />
      </div>
    </div>
  );
}

export default UserList;
