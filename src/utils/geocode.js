const request = require('request');
const { urlMapbox, token } = require('../../config/mapbox');

const geocode = (address, callback) => {
	const url = `${urlMapbox}${encodeURIComponent(address)}.json?access_token=${token}&limit=1`;

	request({url, json: true}, (error, { body } ) => {
		if(error){
			callback('Unable to connect to locations services.', undefined);
		}else if(body.features.length === 0){
			callback('Unable to find location. Try another search', undefined);
		}else{
			const { place_name, center } = body.features[0];
			callback(undefined, {
				latitude: center[1],
				longitude: center[0],
				location: place_name
			});
		}
	});
};

module.exports = geocode;