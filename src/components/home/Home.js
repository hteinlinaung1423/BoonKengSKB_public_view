import React, { useEffect, useState } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import { getWeatherConditions } from '../../actions/home-actions/home-action';

const HomeApp = () => {

    const position = useMousePosition();
    const [weatherCondition, setWeatherCondition] = useState({ current_datetime: '', forecasts: [] });

    useEffect(() => {
        const initHome = async () => {
            let response = await getWeatherConditions();           
            let obj = {
                current_datetime: response.timestamp,
                forecasts: response.forecasts
            }

            console.log("Weather ", obj.forecasts)
            setWeatherCondition(obj);
   
        }
        initHome();

    }, []);
    return (
        <div>
            <h1>Developing of this application will be learning purpose only.</h1>
            <p>Mouse Position : {position.x}, {position.y}</p>
            <h3>Weather Condition ({weatherCondition.current_datetime})</h3>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Area</th>
                            <th>Condition</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            weatherCondition.forecasts.map((weather, index) => (
                                <tr key={index}>
                                    <td>{weather.area}</td>
                                    <td>{weather.forecast}</td>
                                </tr>
                            ))                    
                        }                       
                    </tbody>
                </table>
            </div>
        </div>
    )

};
export { HomeApp as default }

