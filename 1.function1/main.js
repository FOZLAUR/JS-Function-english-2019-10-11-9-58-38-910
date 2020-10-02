function reverseString(){
	var message = document.getElementById("str1").value;
	var result = "";

	for(var i=message.length-1; i>-1; i--){
		result += message.charAt(i);
	}

	document.getElementById("demo").innerHTML = "\"" + result + "\"";
}