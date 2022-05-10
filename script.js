function crack(){
	var pincode = 0;

	function pad(number)
	{
    	var str = "" + number;
    	while (str.length < 3)
    	{
        	str = "0" + str;
    	}
    	return str;
	}
	for (pincode; pad(pincode) !== pad(document.getElementById("code").value); pincode++);
	{
		document.getElementById("cracked").innerHTML = pad(pincode);
	}	
}