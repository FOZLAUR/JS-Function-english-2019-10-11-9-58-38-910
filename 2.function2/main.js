function isPalindrome(message){
	var result = false;
	var half = Math.ceil(message.length/2);

	for(var i=0; i<message.length/2; i++){
		var start = message.charAt(i);
		var end = message.charAt(message.length-i-1);
		if (start == end){
			result = true;
		} else {
			result = false;
			break;
		}
	}

	if (message.length == 0){
		result = true;
	}

	return result;
}

function execute(){
	var message = document.getElementById("str2").value;
	var pal = isPalindrome(message);

	if (pal){
		document.getElementById("demo").innerHTML = "This is a Palindrome.";
	} else {
		document.getElementById("demo").innerHTML = "This is not a Palindrome.";
	}
}