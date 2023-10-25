import { Component } from "react";

class Card extends Component {
  render() {
    const { monsterId, name, email } = this.props;
    return (
      <div >
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/2${monsterId}?set=set2&size=180x180`}
        />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
