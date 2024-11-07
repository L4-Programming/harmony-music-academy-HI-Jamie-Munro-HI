// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userEmail = document.querySelector("#email").value;
  console.log({ userEmail });
});
// Get the user's email address = userEmail (string)
// Get the user's level = userLevel (string)
// Get the user's hours of study = userHours (number)
// Validate the user's input
// Check if the user has selected a level = make sure that the level chosen decides the hours allowed
// Check if the user has provided an email address = make sure the email is valid
// Check if the user has specified at least one hour of study = must be => 1
// Check if the number of hours requested is within the allowed range = compare to the user's selected level
// Calculate the total cost = userHours * levelChosenCost
// Display the total cost to the user = make sure its on the same page
