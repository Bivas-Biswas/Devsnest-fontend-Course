import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updatePlace, updatePlaceData } from "../redux/actions";

function From() {
    const place = useSelector((state => state.place))
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(place)
            dispatch(updatePlaceData(place))

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={place}
                placeholder='Enter the place'
                onChange={(event => {
                    dispatch(updatePlace(event.target.value))
                })}
            />
            <button type='submit'>Search</button>
        </form>
    );
}

export default From;