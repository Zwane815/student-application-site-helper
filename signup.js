const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !email || !password) {
    message.textContent = "❌ All fields are required.";
    message.className = "text-red-400 text-sm text-center";
    return;
  }

  const userData = {
    username,
    email,
    password,
  };

  localStorage.setItem("userAccount", JSON.stringify(userData));
  message.textContent = "✅ Account created successfully!";
  message.className = "text-green-400 text-sm text-center";
  form.reset();
});