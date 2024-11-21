import { validateForm } from "./validateForm.js";
import { calculateCosts } from "./calculateCosts.js";

// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;
  // Store the user's level as userLevel (string/text)
  let userLevel = document.querySelector("#level").value;
  // Store the user's hours of study as userHours (number)
  let userHours = document.querySelector("#hoursPerWeek").value;

  // validate the user's input
  const result = validateForm({ userEmail, userLevel, userHours });
  
  console.log ({ result });

  // Calculate the total cost
  if (result) {
    const output = calculateCosts(result);

    console.log ({ output });
  }
});


// Display the total cost to the user
