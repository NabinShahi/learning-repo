import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "./Home.css";
import Products from './Products';

function Home(props) {

    const history = useHistory();

    const handleClick = () => {
        history.push("/checkout")
    }

    return (
        <div className="home">
            <div className="home__navbar">
                <h1>REDUX DEMO HOME</h1>
                <h1 className="home__cart" onClick={handleClick}>CART {props.cart.length}</h1>
            </div>

            <div className="home__products">
                <Products
                    id="6546513216544"
                    title="Barcelona Home Jersey"
                    price={1250}
                    image="https://m.media-amazon.com/images/I/61LJdy7KPoL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Products
                    id="6465465462165"
                    title="PSG Home Jersey"
                    price={250}
                    image="https://m.media-amazon.com/images/I/51rMTPv2DwL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Products
                    id="64574986431465"
                    title="Real Madrid Home Jersey"
                    price={200}
                    image="https://m.media-amazon.com/images/I/51aYTdXpvqL._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home__products">
                <Products
                    id="4654987456165"
                    title="Manchester City Home Jersey"
                    price={550}
                    image="https://m.media-amazon.com/images/I/816+dbNxUNL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Products
                    id="1655484216589465"
                    title="Liverpool Away Jersey"
                    price={450}
                    image="https://m.media-amazon.com/images/I/61okh1KN6pL._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Home);
