import React from "react";
import { connect } from "react-redux";
// import { getCartTotal } from "../Redux/reducer";
import "./Subtotal.css";

function Subtotal(props) {

  const total = props.cart.reduce((total, currentItem) => (total = total + currentItem.price), 0);

  return (
    <div className="subtotal">
      <h2>Total items: {props.length}</h2>
      <h3>
        Total amount: $ <strong>{total}</strong>
      </h3>
    </div>
  );
}

const mapStateToProps = (state) => {
return {
  cart: state.cart  
}
}

export default connect(mapStateToProps)(Subtotal);
