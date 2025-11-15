import { Link } from "react-router-dom";

export const Item = (props) => {
  return (
    <div className="m-3 sm:m-5 transition-transform duration-200 hover:scale-105">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          className="  h-80 w-77 sm:h-100 sm:w-80 object-cover rounded-md"
          src={props.image}
          alt={props.name}
        />
      </Link>

      <p className="mt-2 text-sm sm:text-base font-medium text-gray-800">{props.name}</p>

      <div className="flex gap-2 sm:gap-3 text-sm sm:text-base">
        <div className="font-semibold">₹{props.newprice}</div>
        <div className="line-through text-gray-500">₹{props.oldprice}</div>
      </div>
    </div>
  );
};
