const Card = ({ monsterId, name, email }) => {
  return (
    <div>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/2${monsterId}?set=set2&size=180x180`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default Card;
