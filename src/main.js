"use strict";

// Meny
const loginMenuArea = document.querySelector(".login");

// Formulär
if(document.getElementById("login-form")) {
  document.getElementById("login-form").addEventListener("submit", login);
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
    const response = await fetch("http://localhost:5500/api/login", {
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
        window.location.href = "admin.html";
      } else {
        throw Error;
      }
  } catch (error) {
    messageEl.innerHTML = "Inloggningen misslyckades"
    console.error("Fel vid inloggning:", error.message);
  }
}

// Funktion för generera meny för inloggad vy
function changeMenu() {
  if(localStorage.getItem("login-token")) {
    loginMenuArea.innerHTML = `
    <a href="/admin" class="admin-link">Admin</a>
    <a class="login-btn" id="logout-btn">Logga ut</a>
    `;
  } else {
    loginMenuArea.innerHTML = `
    <a class="login-btn" href="/login">Logga in</a>
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

