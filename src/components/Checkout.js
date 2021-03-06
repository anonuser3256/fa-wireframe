import '../style/Checkout.css';
import React from "react";

function Checkout(props) {
    const [firstName, setFirstName] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [cardNumber, setCardNumber] = React.useState("");
    const [expiryDate, setExpiryDate] = React.useState("");
    const [cvv, setCvv] = React.useState("");

    const [validFirstName, setValidFirstName] = React.useState(true);
    const [validSurname, setValidSurname] = React.useState(true);
    const [validEmail, setValidEmail] = React.useState(true);
    const [validCardNumber, setValidCardNumber] = React.useState(true);
    const [validExpiryDate, setValidExpiryDate] = React.useState(true);
    const [validCvv, setValidCvv] = React.useState(true);

    const [triggerFeedback, setTriggerFeedback] = React.useState(false);
    const [finalCost, setFinalCost] = React.useState(0);
    const [finalName, setFinalName] = React.useState("");

    const [cardChecked, setCardChecked] = React.useState(true);

    const handleFirstNameChange = firstName => setFirstName(firstName.target.value);
    const handleSurnameChange = surname => setSurname(surname.target.value);
    const handleEmailChange = email => setEmail(email.target.value);
    const handleCardNumberChange = cardNumber => setCardNumber(cardNumber.target.value);
    const handleExpiryDateChange = expiryDate => setExpiryDate(expiryDate.target.value);
    const handleCvvChange = cvv => setCvv(cvv.target.value);



    function validDataEntries() {
        setTriggerFeedback(false);
        let checkOne = checkFirstName();
        let checkTwo = checkSurname();
        let checkThree = checkEmailFormat();
        let checkFour = checkCardNumber();
        let checkFive = checkExpiryDate();
        let checkSix = checkCvv();
        if (checkOne && checkTwo && checkThree && checkFour && checkFive && checkSix && props.totalCost > 0) {
            setTriggerFeedback(true);
            setFinalCost(props.totalCost);
            setFinalName(firstName);
            props.payForItems();
        }
    }

    function checkFirstName() {
        if (firstName !== "") {
            setValidFirstName(true);
            return true;
        } else {
            setValidFirstName(false);
            return false;
        }
    }

    function checkSurname() {
        if (surname !== "") {
            setValidSurname(true);
            return true;
        } else {
            setValidSurname(false);
            return false;
        }
    }

    function checkEmailFormat() {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            setValidEmail(false);
            return false;
        } else {
            setValidEmail(true);
            return true;
        }
    }

    function checkCardNumber() {
        if (cardChecked && (cardNumber === "" || isNaN(parseInt(cardNumber)))) {
            setValidCardNumber(false);
            return false;
        } else {
            setValidCardNumber(true);
            return true;
        }
    }

    function checkExpiryDate() {
        if (cardChecked && !(/^\d{2}([./-])\d{2}\1\d{4}$/.test(expiryDate))) {
            setValidExpiryDate(false);
            return false;
        } else {
            setValidExpiryDate(true);
            return true;
        }
    }

    function checkCvv() {
        if (cardChecked && (cvv.length !== 3 || isNaN(parseInt(cvv)))) {
            setValidCvv(false);
            return false;
        } else {
            setValidCvv(true);
            return true;
        }
    }

    function handleCardChosen() {
        setCardChecked(true);
    }
    function handlePaypalChosen() {
        setCardChecked(false);
    }

    return (
        <div className="checkout-area">
            <h1 className="checkout-title">Checkout</h1>
            <div className="checkout-form">
                <form className="form-contents">
                    <input
                        className={validFirstName ? 'standard-input' : 'standard-input invalid'}
                        type="text"
                        name="name"
                        placeholder="First name:"
                        onChange={handleFirstNameChange}
                    />
                    <input
                        className={validSurname ? 'standard-input' : 'standard-input invalid'}
                        type="text"
                        name="surname"
                        placeholder="Last name:"
                        onChange={handleSurnameChange}
                    />
                    <input
                        className={validEmail ? 'standard-input' : 'standard-input invalid'}
                        type="text"
                        name="email"
                        placeholder="Email address:"
                        onChange={handleEmailChange}
                    />

                    <div className="card-paypal">
                        <input
                            id="card-radio"
                            value="card-radio"
                            type="radio"
                            name="card-radio"
                            onClick={handleCardChosen}
                            checked={ cardChecked }
                        />
                        <label htmlFor="card-radio">Card</label>
                        <input
                            id="paypal-radio"
                            value="paypal-radio"
                            type="radio"
                            name="card-radio"
                            onClick={handlePaypalChosen}
                            checked={ !cardChecked }
                        />
                        <label htmlFor="paypal-radio">Paypal</label>
                    </div>

                    <div className={cardChecked ? 'visible' : 'invisible'}>
                        <input
                            className={validCardNumber ? 'standard-input' : 'standard-input invalid'}
                            type="text"
                            name="card"
                            placeholder="Card number:"
                            onChange={handleCardNumberChange}
                        />
                        <div className="additional-card-details">
                            <input
                                id="exp-dt"
                                className={validExpiryDate ? 'add-card' : 'add-card invalid'}
                                type="text"
                                name="expiry"
                                placeholder="Expiry Date:"
                                onChange={handleExpiryDateChange}
                            />
                            <input
                                id="cvv"
                                className={validCvv ? 'add-card' : 'add-card invalid'}
                                type="text"
                                name="cvv"
                                placeholder="CVV:"
                                onChange={handleCvvChange}
                            />
                        </div>
                    </div>
                </form>
                <button
                    className="pay-button"
                    onClick={validDataEntries}
                >
                    Pay ??{props.totalCost}
                </button>
                <br/>
                <br/>
                <h2 className={triggerFeedback ? 'visible' : 'invisible'}>
                    Thank you, {finalName}! You have successfully paid ??{finalCost}!
                </h2>
            </div>
        </div>
    );
}

export default Checkout;