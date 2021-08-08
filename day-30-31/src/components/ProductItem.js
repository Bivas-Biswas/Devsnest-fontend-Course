import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addItem, changeQuantity } from "../redux/slice/cartSlice";
import { Link } from "react-router-dom";

function ProductItem(props) {
    const {
        item,
        tittle,
        image,
        price,
        description,
        isCart,
        quantity = 1,
        id
    } = props

    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items)

    const [isAdded, setIsAdded] = useState(false)

    function limitText(text, count) {
        return text.slice(0, count) + (text.length > count ? "..." : "");
    }

    const handleQuantity = (e) => {
        const isIncrease = (e.target.getAttribute('data-isincrease') === 'true')
        dispatch(changeQuantity({ id, isIncrease }))
    }

    // checked if already add in the cart
    useEffect(()=>{
        cartItems.forEach(item => {
            if(item.id === id){
                setIsAdded(true)
            }
        })
        console.log('kk')
    },[])

    return (
        <>
            <div className="item-wrapper">
                <img className='item-image' src={image} alt={tittle}/>
                <h3>{tittle}</h3>
                <p>{limitText(description, 45)}</p>
                <h2>Price: &#8377; {(price * quantity).toFixed(2)}</h2>
                {isCart ?
                    <div className='quantity-increase'>
                        <button
                            disabled={quantity <= 1}
                            data-isincrease='false'
                            onClick={handleQuantity}
                        >
                            -
                        </button>

                        <div>Quantity: {quantity}</div>
                        <button
                            data-isincrease='true'
                            onClick={handleQuantity}
                        >
                            +
                        </button>
                    </div> : !isAdded ?
                        <button onClick={() => {
                            dispatch(addItem(item))
                            setIsAdded(!isAdded)
                        }}>AddToCart</button> :
                        <>
                            <Link to='cart'>
                                <button style={{ backgroundColor: 'yellow' }}>
                                    Go To Cart
                                </button>
                            </Link>
                        </>
                }
            </div>
        </>
    );
}

export default ProductItem;