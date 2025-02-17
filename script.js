//your JS code here. If required.
document.addEventListener("DOMContentLoaded",function () {
	let button = document.getElementById('btn');
	
	let outputText = document.getElementById('output');
	button.addEventListener('click',function() {
	
	let inputText = document.getElementById('text').value.trim();
	let delayInput = parseInt(document.getElementById('delay').value,10);
		//outputText.innerHTML = '';

		if (isNaN(delayInput) || delayInput < 0) {
            outputText.innerHTML = 'Please enter a valid delay in milliseconds.';
            return;
        }
		
		function promise(){
			return new Promise ((resolve)=>{
				setTimeout(() => {
					resolve(inputText);
				},delayInput);
			});
		}
		 async function displayMessage() {
            let message = await promise();
            outputText.innerHTML = message;
        }
		displayMessage();
	});
	
})