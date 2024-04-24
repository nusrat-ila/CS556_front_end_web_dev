// Add your code here
var intervalId;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getRandomColor(){
	var r = getRandomInt(256);
	var g = getRandomInt(256);
	var b = getRandomInt(256);
	var alpha = 0.7;
	return rgb(r,g,b,alpha);
}

function changeColor() {
	var body = document.body;
	var r = getRandomInt(256);
	var g = getRandomInt(256);
	var b = getRandomInt(256);
	var alpha = 0.3;
	var rgbColor = 'rgb(' + r + ',' + g + ',' + b + ','+alpha+')';
	body.style.backgroundColor = rgbColor;
}


var start_stop_button = document.getElementById("start-stop")
start_stop_button.addEventListener("click", function(){
	console.log(start_stop_button.value);
	
	if(start_stop_button.value =="Start")
	{

		var num = parseInt(document.getElementById("num").value);
		if (num>0)
		{
			intervalId = setInterval(changeColor, num*1000);
			console.log(intervalId);
			start_stop_button.value ="Stop";
			start_stop_button.classList.remove("btn-primary");
			start_stop_button.classList.add("btn-danger");
		}
	}else
	{
		console.log(intervalId);
		clearInterval(intervalId);
		start_stop_button.value ="Start";
		start_stop_button.classList.remove("btn-danger");
		start_stop_button.classList.add("btn-primary");
	}
	
	
	
});
