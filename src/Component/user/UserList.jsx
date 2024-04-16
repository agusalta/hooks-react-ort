import userData from "../../Api/userData.js";
import User from "./User.jsx";

function UserList() {
  return (
    <div className="users-container">
      <div className="users-list">
        {userData.map((user, index) => {
          return (
            <User
              key={index}
              username={user["Display name"]}
              city={user.City}
              department={user.Department}
              picture={user.Picture}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
