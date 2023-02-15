import { IPropsCount } from "../Product/type/types";

// selected item counting component
// the function takes count: the total number of items selected
//    increase: adding a product
//    id of the selected element
//    decrease: product reduction
const Count = ({ count, increase, id, decrease }: IPropsCount) => {
  return (
    <div className="count">
      <div className="count-controls">
        <img
          src={require("./icon/minus.png")}
          alt="decrease"
          className="img-decrease"
          onClick={(e) => {
            decrease(e, id);
          }}
        />
        <div className="count-box">{count}</div>
        <img
          src={require("./icon/add.png")}
          alt="increase"
          className="img-increase"
          onClick={(e) => increase(e, id)}
        />
      </div>
    </div>
  );
};

export default Count;
