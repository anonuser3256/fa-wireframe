import '../style/CartItem.css';
import React from "react";

function CartItem(props) {

    const [quantity, setQuantity] = React.useState(1)

    function increaseItemQuantity() {
        setQuantity(quantity + 1);
        props.increaseTotalCost(props.itemInCart.itemPrice);
    }

    function decreaseItemQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            props.decreaseTotalCost(props.itemInCart.itemPrice);
        }
    }

    function removeItem() {
        props.removeItem(props.itemInCart, quantity, props.index);
    }

    return (
        <div className="cart-item-area">
            <header className="cart-whitespace-area" />
            <div className="cart-item-details">
                <h3>Item {props.itemInCart.itemName} - £{props.itemInCart.itemPrice}</h3>
                <div className="item-interaction">
                    <button onClick={removeItem}>Remove</button>
                    <button onClick={decreaseItemQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increaseItemQuantity}>+</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;