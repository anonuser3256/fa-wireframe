import '../style/App.css';
import Item from "./Item";
import Cart from "./Cart";
import React from "react";
import Checkout from "./Checkout";

function App() {
    const [totalCost, setTotalCost] = React.useState(0);
    const [itemNamesInCart, setItemNamesInCart] = React.useState([]);
    const [itemsInCart, setItemsInCart] = React.useState([]);

    function updateCartItems(itemName, itemPrice) {
        if (!itemNamesInCart.includes(itemName)) {
            setItemNamesInCart(prevState => ([...prevState, itemName]));
            setItemsInCart(prevState => ([...prevState, {itemName, itemPrice, "quantity": 1}]));
            setTotalCost(totalCost + parseFloat(itemPrice));
        }
    }

    return (
        <div className="App">
            <div className="items">
                <Item name="1" price="10" updateCartItems={updateCartItems} />
                <Item name="2" price="17.50" updateCartItems={updateCartItems} />
                <Item name="3" price="22" updateCartItems={updateCartItems} />
                <Item name="4" price="35" updateCartItems={updateCartItems} />
            </div>
            <div className="cart-checkout">
                <Cart itemsInCart={itemsInCart} />
                <Checkout />
            </div>

        </div>
    );
}

export default App;
