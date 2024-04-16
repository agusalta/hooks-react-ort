function Card({ title, text }) {
  return (
    <div className="card-container">
      <h1 className="card-title">{title}</h1>
      <p className="card-text">{text}</p>
    </div>
  );
}

export default Card;
