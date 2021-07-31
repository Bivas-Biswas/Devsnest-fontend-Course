import React, { useState } from 'react';

function WeatherApp() {
    const [place, setPlace] = useState('')
    const [placeData, setPlaceData] = useState(null)
    const [error, setError] = useState('')
    const [show, setShow] = useState(true)

    const updatePlaceData = () => {
        // const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${place}`
        const url = `https://api.weatherapi.com/v1/forecast.json?key=b06be5f7b87c4601a4f74846213107&q=${place}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setPlaceData(data)
                    setError('')
                    setShow(false)
                } else {
                    setError(data.error.message)
                    setShow(false)
                }
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (place)
            updatePlaceData()
        else alert('Give a input')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={place}
                    placeholder='Enter the place'
                    onChange={(e) => setPlace(e.target.value)}
                />
                <button type='submit'>Search</button>
            </form>
            <div className="show_container">
                {
                    placeData && (
                        <>
                            <div className='section-1'>
                                <h1>{placeData.location.name}, {placeData.location.country}</h1>
                                <p>{placeData.location.localtime}</p>
                            </div>
                            <div className='section-2'>
                                <img src={placeData.current.condition.icon} alt=""/>
                                <div className="weather-conditon">
                                    <h1>{placeData.current.temp_c}&#176;</h1>
                                    <p>{placeData.current.condition.text}</p>
                                </div>
                            </div>

                            <div className="section-3">
                                <div>
                                    <h2>{placeData.forecast.forecastday[0].day.maxtemp_c}&#176;</h2>
                                    <p>High</p>
                                </div>

                                <div>
                                    <h2>{placeData.current.wind_kph}mph</h2>
                                    <p>Wind</p>
                                </div>

                                <div>
                                    <h2>{placeData.forecast.forecastday[0].astro.sunrise}</h2>
                                    <p>Sunrise</p>
                                </div>

                                <div>
                                    <h2>{placeData.forecast.forecastday[0].day.mintemp_c}&#176;</h2>
                                    <p>Low</p>
                                </div>

                                <div>
                                    <h2>{placeData.current.humidity}</h2>
                                    <p>Humidity</p>
                                </div>

                                <div>
                                    <h2>{placeData.forecast.forecastday[0].astro.sunset}</h2>
                                    <p>Sunset</p>
                                </div>
                            </div>

                        </>
                    )
                }

                {show && <h1 className='no-search'>Search for location</h1>}

                {error && <h2>{error}</h2>}
            </div>
        </>
    );
}

export default WeatherApp;