document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Collect form data
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const gender = document.getElementById("gender").value;
    const password = document.getElementById("password").value;
  
    // Basic validation
    if (!fullName || !email || !mobile || !gender || !password) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Simulate form submission
    alert(`Registration successful!
    Name: ${fullName}
    Email: ${email}
    Mobile: ${mobile}
    Gender: ${gender}`);
  });
  