import '../style/Cart.css';
import React from "react";
import CartItem from "./CartItem";

function Cart(props) {


    React.useEffect(() => {
        //
    }, [props.itemsInCart]);

    return (
        <div className="cart-area">
            <h1 className="cart-title">Your cart</h1>
            <div className="your-cart-items">
                {props.itemsInCart.map(function(object, i){
                    return <CartItem itemsInCart={object} key={i} />;
                })}
            </div>
        </div>
    );
}

export default Cart;