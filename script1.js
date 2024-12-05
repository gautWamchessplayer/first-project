document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        alert('Please fill all fields!');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Find user with matching username and password
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = 'page9.html'; // Redirect to page9
    } else {
        alert('Invalid credentials!');
    }
});
