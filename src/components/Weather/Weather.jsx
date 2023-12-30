import PropTypes from 'prop-types';
import { useState } from 'react';

const Weather = ({
    cityName,
    temprature,
}) => {

    // [variable, function to update that variable]
    const [isLogin, setIsLogin] = useState(false);

    const handleBtnClik = () => {
        setIsLogin(!isLogin)
    }

    return (
        <div>
            <h1>Weather</h1>
            <h2>City: {cityName}</h2>
            <h2>Temprature: {temprature}</h2>

            {isLogin ? (
                <div className="alert alert-success" role="alert">
                    You are now LOGGED IN
                </div>
            ) : (
                <div className="alert alert-danger" role="alert">
                    You are now LOGGED OUT! So please Login to continue.
                </div>
            )}

            <button onClick={handleBtnClik} className='btn btn-primary'>{isLogin ? "Logout" : "Login"}</button>
        </div>
    )
}

// const Weather = (props) => {
//     const { cityName, temprature } = props;
//     return (
//         <div>
//             <h1>Weather</h1>
//             <h2>City: {cityName}</h2>
//             <h2>Temprature: {temprature}</h2>
//         </div>
//     )
// }

Weather.propTypes = {
    cityName: PropTypes.string,
    temprature: PropTypes.string,
}

export default Weather