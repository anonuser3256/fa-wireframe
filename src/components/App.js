import '../style/App.css';
import Item from "./Item";
import Cart from "./Cart";
import React from "react";

function App() {
    const [totalCost, setTotalCost] = React.useState(0);
    const [itemsInCart, setItemsInCart] = React.useState([]);

    function updateCartItems(itemName, itemPrice) {
        if (!itemsInCart.includes(itemName)) {
            setItemsInCart(prevState => ([...prevState, itemName]));
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
                <Cart />
            </div>

        </div>
    );
}

export default App;
