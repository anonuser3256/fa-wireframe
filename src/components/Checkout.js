import '../style/Checkout.css';
import React from "react";

function Checkout(props) {

    return (
        <div className="checkout-area">
            <h1 className="checkout-title">Checkout</h1>
            <div className="checkout-form">
                <form className="form-contents">
                    <input className="standard-input" type="text" name="name" placeholder="First name:" />
                    <input className="standard-input" type="text" name="surname" placeholder="Last name:" />
                    <input className="standard-input" type="text" name="email" placeholder="Email address:" />
                    <input className="standard-input" type="text" name="card" placeholder="Card number:" />
                    <div className="card-paypal">
                        <input id="card-radio" type="radio" name="card-radio" />
                        <label htmlFor="card-radio">Card</label>
                        <input id="paypal-radio" type="radio" name="paypal-radio" />
                        <label htmlFor="paypal-radio">Paypal</label>
                    </div>
                    <div className="additional-card-details">
                        <input id="exp-dt" className="add-card" type="text" name="expiry" placeholder="Expiry Date:" />
                        <input id="cvv" className="add-card" type="text" name="cvv" placeholder="CVV:" />
                    </div>
                </form>
                <button className="pay-button">Pay £{props.totalCost}</button>
            </div>
        </div>
    );
}

export default Checkout;