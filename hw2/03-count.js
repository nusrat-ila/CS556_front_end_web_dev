// Add your code here

function handleKeyDown(){
	//console.log("test");
	const txt = document.getElementById('txt');
	const input = document.getElementById('input');
	//console.log(txt.innerHTML);
	//console.log(input.value);
	//alert("Input Value: " + input.value);
	var tag1 = "<hilight>";
	var tag2 = "</hilight>";
	var re1 = new RegExp(tag1,"g")
	var re2 = new RegExp(tag2,"g")
	txt.innerHTML = txt.innerHTML.replace(re1,"")
	txt.innerHTML = txt.innerHTML.replace(re2,"")
	if(txt.innerHTML.includes(input.value))
		{
			console.log("-"+input.value+"-");
			var re3 = new RegExp('\\b'+input.value+'\\b', "g")
			txt.innerHTML = txt.innerHTML.replace(re3,"<hilight>"+input.value+"</hilight>")
		}
}
const input = document.getElementById('input');
input.addEventListener('keyup', handleKeyDown);
