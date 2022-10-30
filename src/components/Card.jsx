import "./Card.css";

const Card = ({ name, porcentagem, eleito }) => {
  return (
    <div className="card">
      <div className={`${eleito === false ? "content" : "contentEleito"}`}>
        <p className="eleito">{`${eleito === true ? "ELEITO" : ""}`}</p>
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
