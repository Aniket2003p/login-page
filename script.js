document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email.trim() === '' || password.trim() === '') {
      alert('Email and password are required.');
      return;
    }
  
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (password.length < 8) {
      alert('Password must be at least 8 characters.');
      return;
    }
    if (email === 'aniket@gmail.com' && password === 'aniket123') {
        alert('Login successful!');
      } else {
        alert('Invalid email or password.');
      }
  });
  