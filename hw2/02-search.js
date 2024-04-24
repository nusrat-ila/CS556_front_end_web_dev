
function handleClick()
{
	console.log('Button clicked!');
	const txt = document.getElementById('userInput');
	console.log(txt.value);
	
	const items = document.querySelectorAll('.card');
	for (let i = 0; i < items.length; i++) {
        const card = items[i];
		var title = card.querySelector('.card-title')
		if(title.innerHTML.includes(txt.value))
		{
			console.log("-"+txt.value+"-");
			title.innerHTML = title.innerHTML.replace(txt.value,"<mark>"+txt.value+"</mark>")
			console.log(title.textContent);
			card.classList.remove("d-none");
		}
	}
}



// Function to generate HTML cards based on peopleData
function generateCards() {
    const cardContainer = document.getElementById("card-container");

    peopleData.forEach(person => {
		
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("m-2");
        card.classList.add("flex-item");
		card.classList.add("d-none");
        card.style.width = "12rem";

        // Card content (name and birth year)
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerHTML = person.name;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = `Birth Year: ${person.birthYear}`;

        // Append card content to card element
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);

        // Append card element to card container
        cardContainer.appendChild(card);
    });
}

// Call the generateCards function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    generateCards();
});
const button = document.getElementById('srch');
button.addEventListener('click', handleClick);