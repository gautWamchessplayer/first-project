document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    if (!username || !password) {
        alert('Please fill all fields!');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    if (users.find(user => user.username === username)) {
        alert('Username already exists!');
        return;
    }

    // Save new user data
    const newUser = { username: username, password: password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! You can now log in.');
    window.location.href = 'page19.html'; // Redirect to login page
});
