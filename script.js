const correctUsername = "karuna";
const correctPassword = "icecream123";
let attempts = 3;

function login() {
  const usernameInput = document.querySelector('input[placeholder="Username"]');
  const passwordInput = document.querySelector('input[placeholder="Password"]');
  const message = document.getElementById("message");
  const loginButton = document.querySelector("button");

  const user = usernameInput.value.trim();
  const pass = passwordInput.value.trim();

  message.classList.remove("success", "error");

  if (user === correctUsername && pass === correctPassword) {
    message.textContent = `🍦 Login successful! Welcome back, ${user}!`;
    message.classList.add("success");

    setTimeout(() => {
      alert("Redirecting to dashboard...");
    }, 1000);
  } else {
    attempts--;

    if (attempts > 0) {
      message.textContent = `❌ Incorrect! ${attempts} attempt(s) left.`;
      message.classList.add("error");
    } else {
      message.textContent = "🚫 Too many failed attempts!";
      message.classList.add("error");

      usernameInput.disabled = true;
      passwordInput.disabled = true;
      loginButton.disabled = true;
    }
  }
}
