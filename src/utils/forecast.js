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
			const { name, country } = body.location;
			const { temperature, weather_descriptions, humidity, precip, wind_speed, feelslike } = body.current;
			callback(undefined, {
				name: name,
				country: country,
				weather_description: weather_descriptions[0],
				temperature: temperature,
				feelslike: feelslike,
				humidity: humidity,
				precip: precip,
				wind_speed: wind_speed
			});
					 
		
		}
	});
};

module.exports = forecast;