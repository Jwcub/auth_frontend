"use strict";

// Meny
const loginMenuArea = document.querySelector(".login");

// Formulär
if(document.getElementById("login-form")) {
  document.getElementById("login-form").addEventListener("submit", login);
}

if(document.getElementById("register-form")) {
  document.getElementById("register-form").addEventListener("submit", newAccount);
}

document.addEventListener("DOMContentLoaded", () => {
  changeMenu();
});

// Funktion för inloggningsformulär
async function login(event) {
  event.preventDefault();

  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;
  const messageEl = document.getElementById("error-message");
  messageEl.innerHTML = "";

  if(!usernameInput || !passwordInput) {
    messageEl.innerHTML = "Användarnamn och lösenord måste anges";
    return
  }

  try {
    const response = await fetch("https://auth-app-ncgj.onrender.com//api/login.html", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username: usernameInput,
        password: passwordInput
      })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("login-token", data.response.token);
        window.location.href = "/admin.html";
      } else {
        throw Error;
      }
  } catch (error) {
    messageEl.innerHTML = "Inloggningen misslyckades"
    console.error("Fel vid inloggning:", error.message);
  }
}

// Funktion för att registera ny användare
async function newAccount(event) {
  event.preventDefault();

  const usernameEl = document.getElementById("username")
  const passwordEl = document.getElementById("password")
  const usernameInput = usernameEl.value;
  const passwordInput = passwordEl.value;
  const messageEl = document.getElementById("error-message");
  messageEl.innerHTML = "";

  if(!usernameInput || !passwordInput) {
    messageEl.innerHTML = "Användarnamn och lösenord måste anges";
    return
  }

  try {
    const response = await fetch("https://auth-app-ncgj.onrender.com/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username: usernameInput,
        password: passwordInput
      })
      });

    const data = await response.json();
    if (!response.ok) {
      messageEl.innerText = data.error;
      return;
    }

    messageEl.innerText = data.message;
    usernameEl.value = "";
    passwordEl.value = "";
    
  } catch (err) {
    console.log(err.message);
    messageEl.innerText = "Något gick fel";
  }
}

// Funktion för generera meny för inloggad vy
function changeMenu() {
  if(localStorage.getItem("login-token")) {
    loginMenuArea.innerHTML = `
    <a href="/admin.html" class="link">Admin</a>
    <a class="login-btn" id="logout-btn">Logga ut</a>
    `;
  } else {
    loginMenuArea.innerHTML = `
    <a href="/register.html" class="link">Registrera</a>
    <a class="login-btn" href="/login.html">Logga in</a>
    `;
  }

  // Funktionalitet för utloggning
  const logoutBtn = document.getElementById("logout-btn");
  if(logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("login-token");
      console.log("ta bort token")
      window.location.href = "login.html";
    });
  }
}

