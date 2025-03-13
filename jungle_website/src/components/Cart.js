import React from "react";
import '../styles/Cart.css'

function Cart() {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const flowerPrice = 15;
    return (<div className="lmj-cart">
        <h2>Cart</h2>
        <ul>
            <li>Monstera : {monsteraPrice} €</li>
            <li>Lierre : {lierrePrice} €</li>
            <li>Flower : {flowerPrice} €</li>
        </ul>
        Total : {monsteraPrice + lierrePrice + flowerPrice} €
    </div>)
}

export default Cart;