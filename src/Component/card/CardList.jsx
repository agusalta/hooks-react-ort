import cardsData from "../../Api/cardsData";
import Card from "../card/Card";

function CardList() {
  return (
    <div className="cards">
      {cardsData.map(card => (
        <Card key={card.title} title={card.title} text={card.text} />
      ))}
    </div>
  );
}

export default CardList;
