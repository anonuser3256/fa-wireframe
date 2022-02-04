import '../style/Item.css';
import React from "react";

function Item(props) {


    function updateCartItems() {
        props.updateCartItems(props.name, props.price)
    }

    return (
        <div className="item-area">
            <header className="whitespace-area" />
            <div className="item-info">
                <div className="item-details">
                    Item {props.name} £{props.price}
                </div>
                <div className="item-button">
                    <button onClick={updateCartItems}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Item;