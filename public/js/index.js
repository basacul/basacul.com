console.log('Client side javascript file is loaded.');


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');


weatherForm.addEventListener('submit', (e) => {
	// prevent reload after submit
	e.preventDefault();
	
	messageOne.textContent = 'Loading....';
	messageTwo.textContent = '';
	
	const location = search.value;
	const url = `https://basacul.run-eu-central1.goorm.io/weather?address=${location}`; 
	
	fetch(url).then((response) => {
		
		response.json().then((data) => {
			
			if(data.error){
					
				messageOne.textContent = data.error;

			}else{
				
				messageOne.textContent = data.location;
				messageTwo.textContent = data.forecast;
 
			}
		});
	});
});