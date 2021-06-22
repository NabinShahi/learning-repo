import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../Redux/actions';
import "./CheckoutProducts.css";

function CheckoutProducts(props) {
    return (
        <div className = "checkoutProduct">
            <img className = "checkoutProduct__image" src = {props.image} alt = "" />

            <div className = "checkoutProduct__info">
                <p className = "checkoutProduct__title">{props.title}</p>

                <p className = "checkoutProduct__price">
                    <small>Price: $</small>
                    <strong>{props.price}</strong>
                </p>

                <button onClick={() => props.pullFromCart(props.id)}><strong>Remove from Cart</strong></button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        pullFromCart: (payload) => dispatch(removeFromCart(payload))
    }
}

export default connect(null, mapDispatchToProps)(CheckoutProducts);
