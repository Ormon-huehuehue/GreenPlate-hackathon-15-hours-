// Event listener for form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('floatingInputEmail').value;
    const name = document.getElementById('floatingInputName').value;
    const password = document.getElementById('floatingPassword').value;


    const formData = {
        email: email,
        name:name,
        password: password
    }; // Get form data

    // Make a POST request to the backend endpoint using Fetch API
    fetch('http://localhost:8080/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle success response
        console.log('Response from backend:', data);
        // Redirect to another page or display a success message, etc.
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
        // Display error message to the user, etc.
    });
});
