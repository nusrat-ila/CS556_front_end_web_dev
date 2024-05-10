// Add your code here

function handleKeyDown(){
	//console.log("test");
	const txt = document.getElementById('txt');
	const input = document.getElementById('input');
	//console.log(txt.innerHTML);
	//console.log(input.value);
	//alert("Input Value: " + input.value);
	const tag1 = "<hilight>";
	const tag2 = "</hilight>";
	const re1 = new RegExp(tag1,"g")
	const re2 = new RegExp(tag2,"g")
	txt.innerHTML = txt.innerHTML.replace(re1,"")
	txt.innerHTML = txt.innerHTML.replace(re2,"")
	if(txt.innerHTML.includes(input.value))
		{
			console.log("-"+input.value+"-");
			const re3 = new RegExp('\\b'+input.value+'\\b', "g")
			txt.innerHTML = txt.innerHTML.replace(re3,"<hilight>"+input.value+"</hilight>")
		}
}
const input = document.getElementById('input');
input.addEventListener('keyup', handleKeyDown);
