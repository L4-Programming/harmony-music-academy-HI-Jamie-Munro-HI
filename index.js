// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const maxHoursPerLevel = {
    basic: 5,
    advanced: 10,
  };

  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;
  // Store the user's level = userLevel (string)
  let userLevel = document.querySelector("#level").value;
  // Get the user's hours of study = userHours (number)
  let userHours = parseInt(document.querySelector("#hoursPerWeek").value);

  // Validate the user's input

  // Check if the user has provided an email address = make sure the email is valid
  if (userEmail === "") {
    alert("Please enter your email address.");

    return;
  }
  // Check if the user has selected a level = make sure that the level chosen decides the hours allowed
  if (userLevel === "") {
    alert("Please enter a level.");

    return;
  }
  // Check if the user has specified at least one hour of study
  if (isNaN(userHours) || userHours < 1) {
    alert("Please enter at least one hour.");

    return;
  }

  // Check if the userLevel exists in the maxHoursPerLevel object
  if (!maxHoursPerLevel.hasOwnProperty(userLevel)) {
    alert("Invalid level of study selected.");

    return;
  }
  // Check if the number of hours requested is within the allowed range
  const maxAllowedHours = maxHoursPerLevel[userLevel];
  if (userHours > maxAllowedHours) {
    alert(`You can only study a maximum of ${maxAllowedHours} hours per week for your chosen level.`);

    return;
  }

  console.log({ userEmail, userLevel, userHours });
});

// Calculate the total cost = userHours * levelChosenCost
// Display the total cost to the user = make sure its on the same page
