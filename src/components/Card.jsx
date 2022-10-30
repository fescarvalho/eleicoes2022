import "./Card.css";

const Card = ({ name, porcentagem }) => {
  return (
    <div className="card">
      <div className="content">
        <h1>{name}</h1>
        <p>
          {porcentagem}
          <span>%</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
