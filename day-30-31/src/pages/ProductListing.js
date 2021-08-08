import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../redux/slice/productsSlice";
import ProductItem from "../components/ProductItem";

function ProductListing() {
    const items = useSelector(state => state.products.item)
    const loading = useSelector(state => state.products.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    if(loading) return <h1 style={{textAlign:'center'}}>Loading..</h1>

    return (
        <div className='items-container'>
            {items.map((item, index) => (
                <ProductItem
                    key={index}
                    item={item}
                    tittle={item.title}
                    image={item.image}
                    price={item.price}
                    description={item.description}
                    id={item.id}/>
            ))}
        </div>
    );


}

export default ProductListing;