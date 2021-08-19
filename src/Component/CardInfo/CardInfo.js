import "./cardinfo.css";
const CardInfo = ({ img, desc }) => {
  return (
    <div className="card  cardinfo  ">
      <img src={img} className="card-img-top w-100" alt="..."></img>
      <div className="card-body">
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default CardInfo;
