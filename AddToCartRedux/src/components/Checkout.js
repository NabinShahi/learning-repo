import React from "react";
import { connect } from "react-redux";
import "./Checkout.css";
import CheckoutProducts from "./CheckoutProducts";
import Subtotal from "./Subtotal";

function Checkout(props) {
  // console.log(props.cart);
  return (
    <div className="checkout">
      <h1>This is Checkout Page</h1>

      {props.cart?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty.</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to Cart" next to the item.
          </p>
        </div>
      ) : (
        <div className="checkout__title">
          <h2 style={{ borderBottom: "1px solid black" }}>
            Your Shopping Basket
          </h2>

          {props.cart?.map((item) => (
            <CheckoutProducts
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      )}

      {props.cart.length > 0 && (
        <div className="checkout__right">
          <Subtotal 
            length={props.cart.length}
          />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Checkout);
