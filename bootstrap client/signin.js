// Event listener for form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;

    const formData = {
        email: email,
        password: password
    }; // Get form data

    // Make a POST request to the backend endpoint using Fetch API
    fetch('http://localhost:8080/user/login', {
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
