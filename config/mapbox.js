const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const token = "";

module.exports = {
	urlMapbox: url,
	token: process.env.MAPBOX_TOKEN || token
};