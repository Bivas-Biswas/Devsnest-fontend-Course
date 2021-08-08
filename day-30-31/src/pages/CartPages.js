import React from 'react';
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

function CartPages() {

    const cartItems = useSelector(state => state.cart.items)

    if (cartItems.length === 0) {
        return <h2>No items in Cart</h2>
    }

    const TotalNoOfProduct = () => {
        let count = 0
        cartItems.forEach(item => {
            count += item.quantity
        })
        return count
    }

    const TotalPrice = () => {
        let price = 0
        cartItems.forEach(item => {
            price += item.price * item.quantity
        })
        return price.toFixed(2)
    }

    return (
        <div className='cart-items-container'>
            <h2>Total Products: {TotalNoOfProduct()}</h2>
            <h2>Total Price: &#8377; {TotalPrice()}</h2>
            <div className='items-container'>
                {
                    cartItems.map((item, index) => (
                    <ProductItem
                        key={index}
                        item={item}
                        tittle={item.title}
                        image={item.image}
                        price={item.price}
                        description={item.description}
                        id={item.id}
                        isCart={true}
                        quantity={item.quantity}
                    />
                ))}
            </div>

        </div>
    );
}

export default CartPages;