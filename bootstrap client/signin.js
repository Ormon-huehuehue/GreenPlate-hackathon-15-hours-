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
    }).then(()=>{
        window.location.href = 'Products.html';
    })
});
