import { Component } from "react";
import Card from "./card.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
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
  }
}

export default CardList;
