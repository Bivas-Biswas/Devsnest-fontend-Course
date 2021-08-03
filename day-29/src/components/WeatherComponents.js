import React from 'react';
import { useSelector } from "react-redux";

function WeatherComponents() {
   const placeData = useSelector((state => state.placeData))
    const input = useSelector((state => state.place))

    return (
        <div>
            {/*{placeData && JSON.stringify(placeData)}*/}
            <div className="show_container">
                {
                    placeData && !placeData.error && input &&(
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
                {placeData.error && <h1 className='no-search'>{placeData.error.message}</h1>}
                {!placeData && input && <h1 className='no-search'>Search for location</h1>}
                {!input && <h1 className='no-search'>No Input Given</h1>}
            </div>
        </div>
    );
}

export default WeatherComponents;