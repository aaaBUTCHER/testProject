//register.js

function registerUser() {
    // Get form values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const acceptTerms = document.getElementById("acceptTerms").checked;

    // Check if passwords match and terms are accepted
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (!acceptTerms) {
        alert("Please accept the terms and conditions!");
        return;
    }

    // Create an object with user data
    const user = {
        username: username,
        email: email,
        password: password,
    };

    // Optional: You can log the array to the console
    console.log(user);

    // Send user data to the Java server
    fetch('http://your-java-server/api/saveUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then(response => response.json())
        .then(result => {
            // Clear form fields after successful registration
            document.getElementById("registrationForm").reset();

            // Display a success message
            alert("User registered successfully!");
        })
        .catch(error => {
            console.error('Error registering user', error);
            // Display an error message
            alert("Error registering user. Please try again.");
        });
}


//login.js
