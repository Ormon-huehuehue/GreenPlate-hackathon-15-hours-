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
        console.log(response.ok);
        if (response.ok) {
            console.log(response.ok)
            // Redirect to the products page if login is successful
            window.location.href = 'Products.html';
            alert("There is a possibility that you've entered the wrong password and you'll still got redirected to the products page. This is because the server is not yet set up to handle login errors. This will be fixed in the next section. ALSOOO THE SERVER CRASHES EVERYTIME YOU ENTER THE WRONG PASSWORD.PLEASE RELOAD TO GET TO BE ABLE TO LOGIN AGAIN.");
        } else {
            // Handle unsuccessful login here (e.g., display error message)
            console.error('Login failed');
        }
    })
    .catch(error => {
        // Handle network errors or other exceptions here
        console.error('Error:', error);
    });
});
