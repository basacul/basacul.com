console.log('Client side javascript file is loaded.');


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');
const messageFour = document.querySelector('#message-4');
const messageFive = document.querySelector('#message-5');

weatherForm.addEventListener('submit', (e) => {
	// prevent reload after submit
	e.preventDefault();
	
	messageOne.textContent = 'Loading....';
	messageTwo.textContent = '';
	messageThree.textContent = '';
	messageFour.textContent = '';
	messageFive.textContent = '';
	
	const location = search.value;
	// on goorm when developing
	// const url = `https://basacul.run-eu-central1.goorm.io/weather?address=${location}`; 
	
	// on heroku when in production
	const url = `/weather?address=${location}`; 
	
	fetch(url).then((response) => {
		
		response.json().then((data) => {
			
			if(data.error){
					
				messageOne.textContent = data.error;

			}else{
				const { name, country, temperature, weather_description, humidity, precip, wind_speed, feelslike } = data;
				
				messageOne.textContent = `Searched for ${data.location}:`;
				messageTwo.textContent = `Results for ${name} in ${country}.`;
				messageThree.textContent = `${weather_description}. It is currently ${temperature}°C and it feels like ${feelslike}°C outside. `;
				messageFour.textContent = `The humidity outside is about ${humidity}%.`;
				messageFive.textContent = `The precipitation level is ${precip} mm with a current wind speed of ${wind_speed} km/h.`;
 
			}
		});
	});
});