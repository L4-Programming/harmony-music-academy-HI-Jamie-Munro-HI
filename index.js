// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;
  // Store the user's level = userLevel (string)
  let userLevel = document.querySelector("#level").value;
  // Get the user's hours of study = userHours (number)
  let userHours = document.querySelector("#hoursPerWeek").value;
  console.log({ userEmail, userLevel, userHours });
});

// Validate the user's input
// Check if the user has selected a level = make sure that the level chosen decides the hours allowed
// Check if the user has provided an email address = make sure the email is valid
// Check if the user has specified at least one hour of study = must be => 1
// Check if the number of hours requested is within the allowed range = compare to the user's selected level
// Calculate the total cost = userHours * levelChosenCost
// Display the total cost to the user = make sure its on the same page
