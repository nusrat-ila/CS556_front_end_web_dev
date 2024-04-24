// Add your code here
function showUserInput() {
    // Retrieve form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    // Add more variables to capture other form values (dropdowns, checkboxes, etc.)

    // Construct the user input details to display in the modal
    var userInputDetails = `
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <!-- Add more details for other form fields as needed -->
    `;

    // Display user input details in the modal body
    var modalBody = document.getElementById('userInputDetails');
    modalBody.innerHTML = userInputDetails;

    // Show the modal
    $('#myModal').modal('show');
}
