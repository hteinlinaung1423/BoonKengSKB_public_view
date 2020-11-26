import React, { useEffect, useState } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import { getWeatherConditions } from '../../actions/home-actions/home-action';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const Profile = () => {

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
export { Profile as default }

