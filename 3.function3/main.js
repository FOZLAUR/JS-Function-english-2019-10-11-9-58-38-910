function charSort(message){
	var strCopy = message.split('');
	var result = "";

	for(var i=0; i<message.length; i++){
		for(var j=i+1; j<message.length; j++){
			if(strCopy[j].toLowerCase() < strCopy[i].toLowerCase()){
				var temp = strCopy[i];
				strCopy[i] = strCopy[j];
				strCopy[j] = temp;
			}
		}
	}

	for(var k=0; k<message.length; k++){
		result += strCopy[k];
	}

	return result;
}

function execute(){
	var message = document.getElementById("str3").value;
	var result = charSort(message);

	document.getElementById("demo").innerHTML = "Sorted String: \"" + result + "\"";
	//document.getElementById("demo1").innerHTML = "Sorted String: \"" + result.toUpperCase() + "\"";
	//`1234567890-=[]\;',./~!@#$%^&*()_+{}|:"<>?ASDasDAsd
	//!"#$%&'()*+,-./0123456789:;<=>?@[\]^_`AaADDdssS{|}~
	//!"#$%&'()*+,-./0123456789:;<=>?@[\]^_`AaADDdssS{|}~
}