function wordCounter(message){
	var result = 0;

	for(var i=0; i<message.length; i++){
		if (message.charAt(i) == " "){
			result++;
		}
	}

	if(message.length != 0){
		result++;
	}

	return result;
}

function execute(){
	var message = document.getElementById("str4").value.trim();
	var result = wordCounter(message);

	if (result == 1){
		document.getElementById("demo").innerHTML = "There is " + result + " word.";
	} else {
		document.getElementById("demo").innerHTML = "There are " + result + " words.";
	}

	
}