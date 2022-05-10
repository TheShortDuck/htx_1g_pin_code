function crack(){
	var code = document.getElementById('code').value
	var guess = Math.round(Math.random() * 9997);

	function pad(number) {
   
    	var str = '' + number;
    	while (str.length < 4)
    	{
        	str = '0' + str;
    	}
   
    	return str;

	}

	switch (code) {
		case pad(guess):
			document.getElementById('cracked').innerHTML = pad(guess);
			break;
		case pad(guess + 1):
			document.getElementById('cracked').innerHTML = pad(guess + 1);
			break;	
		case pad(guess + 2):
			document.getElementById('cracked').innerHTML = pad(guess + 2);
			break;
		default:
			document.getElementById('cracked').innerHTML = "Forsøg opbrugt! Dine forsøg var: " + pad(guess) +' '+ pad(guess + 1) +' '+ pad(guess + 2);
	}
}
