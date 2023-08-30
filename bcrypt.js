
document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
  
    if (email.trim() === '' || password.trim() === '') {
      alert('Email and password are required.');
      return;
    }
  
    // Hash the password
    const saltRounds = 8;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
  });
  