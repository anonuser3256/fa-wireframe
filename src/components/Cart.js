import '../style/Cart.css';
import React from "react";
import CartItem from "./CartItem";

function Cart(props) {


    React.useEffect(() => {
        //
    }, [props.itemsInCart]);


    function increaseTotalCost(itemPrice) {
        props.increaseTotalCost(itemPrice);
    }

    function decreaseTotalCost(itemPrice) {
        props.decreaseTotalCost(itemPrice);
    }

    function removeItem(itemToRemove, quantity, itemIndex) {
        props.removeItem(itemToRemove, quantity, itemIndex);
    }

    return (
        <div className="cart-area">
            <h1 className="cart-title">Your cart</h1>
            <div className="your-cart-items">
                {props.itemsInCart.map((object, i) => {
                    return <CartItem
                        itemInCart={object}
                        index={i}
                        increaseTotalCost={increaseTotalCost}
                        decreaseTotalCost={decreaseTotalCost}
                        removeItem={removeItem}
                    />;
                })}
            </div>
            <h1 className="cart-title cart-total">Total cost: £{props.totalCost}</h1>
        </div>
    );
}

export default Cart;