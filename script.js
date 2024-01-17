const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function saveLoginInfo() {
    // Get values from the form
    var username = document.getElementById("username").value;
    var Email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;

    // Create an object to store login information
    var loginInfo = {
      username: username,
      password: password,
      Email : Email
    };
    console.log("Login information:", loginInfo);
    // Convert the object to a JSON string
    var loginInfoJSON = JSON.stringify(loginInfo);

    // Save the JSON string in local storage
    localStorage.setItem("loginInfo", loginInfoJSON);

    // Redirect to the next page (replace 'nextPage.html' with your actual page)
    window.location.href = '/inner/Minorproject1.html';
  }