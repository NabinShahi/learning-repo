import React from 'react';
import { connect } from 'react-redux';
import "./Products.css"
import { addToCart } from "../Redux/actions";

function Products(props) {

    const item = {
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
    }

    return (
        <div className = "product">
            <div className = "product__info">
                <h3>{props.title}</h3>
                <p className = "product__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
            </div>
            <img src={props.image} alt = "" />
            <button onClick={() => props.pushToCart(item)}>
                <strong>Add to Cart</strong>
            </button>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//       cart: state.cart,
//     };
//   };
  
const mapDispatchToProps = (dispatch) => {
    return {
      pushToCart: (payload) => dispatch(addToCart(payload)),
    };
};

export default connect(null, mapDispatchToProps)(Products);
