import { Link } from "react-router-dom";

export const Item = (props) => {
  return (
    <div className="m-5 transition-transform duration-200 hover:scale-110">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          className="h-100 w-80"
          src={props.image}
          alt=""
        />
      </Link>
      <p>{props.name}</p>
      <div className="flex gap-3">
        <div>₹{props.newprice}</div>
        <div className="line-through">₹{props.oldprice}</div>
      </div>
    </div>
  );
};
