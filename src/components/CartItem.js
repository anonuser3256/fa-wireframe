import '../style/CartItem.css';
import React from "react";

function CartItem(props) {

    return (
        <div className="cart-item-area">
            <header className="cart-whitespace-area" />
            <div className="cart-item-details">
                <h3>Item {props.itemsInCart.itemName} - £{props.itemsInCart.itemPrice}</h3>
                <div className="item-interaction">
                    <button>Remove</button>
                    <button>-</button>
                    <span>{props.itemsInCart.quantity}</span>
                    <button>+</button>
                </div>

            </div>
        </div>
    );
}

export default CartItem;