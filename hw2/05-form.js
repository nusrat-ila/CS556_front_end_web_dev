var fullname = document.getElementById('fullName');
var email = document.getElementById('email');
var txtarea = document.getElementById('txtarea');
var courses = document.getElementsByName('programmingLanguages');
var registrationStatus = document.getElementById('registrationStatus');

function submitFunction(){
	const name = document.getElementById('name');
	name.innerHTML = fullname.value;
	const em = document.getElementById('em');
	em.textContent = email.value;
	const regstat = document.getElementById('reg_stat');
	regstat.innerHTML = registrationStatus.value;
	const courses_modal = document.getElementById('courses');
	courses_modal.innerHTML = "";
	
	//courses_modal.append('<b>Courses Taken </b><br>');
	for (let i = 0; i < courses.length; i++) {
		const c = courses[i];
		if (c.checked)
		{
			const item = document.createElement("li");
			item.textContent= c.value;
			courses_modal.appendChild(item);

		}
		
	}
	const any_else = document.getElementById('any_else');
	any_else.innerHTML = txtarea.value;
    let modal = new bootstrap.Modal(document.getElementById('usrmodal')); 
    modal.show(); 	
}

function resetFunction(){
    fullname.innerHTML = "";
	email.innerHTML = "";
	txtarea.innerHTML = "";
	for (let i = 0; i < courses.length; i++) {
		var c = courses[i];
		if (c.checked)
		{
			c.checked=false;
		}
		
	}
	
}