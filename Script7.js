document.getElementById("usernameForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var usernameInput = document.getElementById("username");
    var username = usernameInput.value.trim();

   
    var isValid = validateUsername(username);


    if (isValid) {
        alert("Success! Username is valid.");
    } else {
        alert("Error! Username must be at least 5 characters long and contain only alphanumeric characters.");
    }
});

function validateUsername(username) {
   
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return username.length >= 5 && alphanumericRegex.test(username);
}

//Assignment 7(2)
var button = document.getElementById("toggleButton");
var hiddenDiv = document.getElementById("hiddenDiv");

button.addEventListener("click", function() {
    if (hiddenDiv.classList.contains("hidden")) {
        hiddenDiv.classList.remove("hidden");
        button.textContent = "Hide Div";
    } else {
        hiddenDiv.classList.add("hidden");
        button.textContent = "Show Div";
    }
});