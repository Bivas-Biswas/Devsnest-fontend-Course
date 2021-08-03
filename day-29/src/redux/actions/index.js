import { UPDATE_PLACE, UPDATE_PLACE_DATA } from "../actiontypes";

const updatePlace = (place) => {
    return {
        type: UPDATE_PLACE,
        payload: place
    }
}

const updatePlaceData = (place) => {
    return (dispatch) =>{
        const url = `https://api.weatherapi.com/v1/forecast.json?key=b06be5f7b87c4601a4f74846213107&q=${place}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch({
                    type: UPDATE_PLACE_DATA,
                    payload: data
                })
            })
    }
}

export { updatePlace, updatePlaceData }