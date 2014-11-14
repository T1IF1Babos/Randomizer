/**
 * Created by VesAl070 on 06/11/14.
 */

var input = document.getElementById("input");
var output = document.getElementById("output");

function init() {
	input.value = "";
	output.value = "";
}

function randomize(){
	var randominput = input.value;
	var array = [];
	array = randominput.split("\n");
	array = cleanArray(array);
	array = shuffleArray(array);
	output.value = "";
	for(var i = 0; i < array.length; i++)
		output.value =output.value + (output.value != ""? "\n":"") + array[i];
}

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

function cleanArray(array){
	var result = [];
	var temp = "";
	for(var i = 0; i < array.length;i++ ){
		temp = array[i];
		while(temp.contains(" ")){
			temp = temp.replace(" ", "");
		}
		if(temp == "") continue;
		temp = array[i];
		while(temp.charAt(0) == " ")
			temp = temp.substring(1, temp.length);
		while(temp.charAt(temp.length-1) == " ")
			temp = temp.substring(0, temp.length -1);
		result.push(temp);
	}
	return result;
}






document.addEventListener("load", init());