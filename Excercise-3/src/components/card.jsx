const Card = (Props) => {
  return (
    <div className="cards">
      <img src={Props.img} />
      <h1>
        {Props.name}, {Props.age}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, minima!
      </p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
