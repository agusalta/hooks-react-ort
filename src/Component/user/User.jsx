function User({ index, username, city, department, picture }) {
  return (
    <div className="user-container">
      <img alt={index} src={picture} className="user-pic" />
      <h2 className="user-name">{username}</h2>
      <p className="user-city">{city}</p>
      <p className="user-dep">{department}</p>
    </div>
  );
}

export default User;
