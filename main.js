const sumbitButton = document.getElementById("submitMe");
console.log(sumbitButton);
let emailInput = document.getElementById("email"); // email input // changed to let so i update back to empty text after submitting form

sumbitButton.addEventListener("click", function (event) {
  // once you click the  Request Access button..
  event.preventDefault(); //it doesn't execute right away , instead it will run the rest of the code i have provided to see what i want it to do instead
  const email = emailInput.value.trim(); // .trim() is a function that removes any extra spaces or "whitespace" from the beginning and end of the text.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression for validating email !

  if (!emailRegex.test(email)) {
    // takes the email variable(which hold the value aka the text we input)
    // if the email input doesn't matches the valid pattern then return ..
    alert("Please enter a valid email address :)");
  } else {
    // realized else statements doesn't get conditions ex: else (x > y ) {}
    alert("Thank you!");

    emailInput.value = " "; // remember to add ".value" to update the text
  }
});

/*.test() is a method that belongs to JavaScript regular expression objects*/
/* .test(email) is specifically testing whether the email address stored in the email variable matches the pattern described by the emailRegex regular expression.*/
