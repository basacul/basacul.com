const request = require('request');
const { urlWeatherstack, token } = require('../../config/weatherstack');

const forecast = ({ location, latitude, longitude}, callback) => {

	const url = `${urlWeatherstack}${token}&query=${latitude},${longitude}&units=m`;

	request({url, json: true}, (error, { body} ) => {
		if(error){
			callback('Unable to connect to weather service.', undefined);
		}else if(body.error){
			callback('Unable to find location.', undefined);
		}else{
			const { temperature, weather_descriptions, feelslike } = body.current;
			callback(undefined, `${weather_descriptions[0]}. It is currently ${temperature}°C out. It feels like ${feelslike}°C out.`);
		}
	});
};

module.exports = forecast;