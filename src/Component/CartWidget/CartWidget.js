import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <div>
      <span className="fs-1 text-white">0</span>
      <FontAwesomeIcon size="3x" icon={faCartPlus} color="white" />;
    </div>
  );
};

export default CartWidget;
