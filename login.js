const apiUrl = "http://localhost:5500"; // Adjust to your backend's URL

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    fetch(`${apiUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("signupMessage").innerText = data.message;
      })
      .catch((error) => console.error("Error:", error));
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          document.getElementById("loginMessage").innerText =
            "Login successful!";
        } else {
          document.getElementById("loginMessage").innerText = data.message;
        }
      })
      .catch((error) => console.error("Error:", error));
  });

document
  .getElementById("accessProtected")
  .addEventListener("click", function () {
    const token = localStorage.getItem("jwt");

    fetch(`${apiUrl}/protected`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("protectedMessage").innerText = data.message;
      })
      .catch((error) => console.error("Error:", error));
  });
