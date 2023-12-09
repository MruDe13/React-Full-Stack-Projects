import Card from "./card.component";

const CardList = ({ monsters }) => {
  return (
    <div className="card">
      {monsters.map((monster) => {
        const { id } = monster;
        return (
          <div key={id} className="card-container">
            <Card monsterId={id} name={monster.name} email={monster.email} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
