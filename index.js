var button = document.querySelector("button");
var inputElement = document.querySelector("input");
var alertImg = document.querySelector(".alertDiv");
var alertMessage = document.querySelector(".alertValidEmail");

// On Button press
button.addEventListener("click", function() {
  var valueEntered = inputElement.value;
  var lengthOfEnteredValue = valueEntered.length;
  var splitLengthAfterAt = valueEntered.split("@").length;
  var splitLengthAfterFStop = valueEntered.split(".").length;
  var hasAt = valueEntered.includes("@");
  var hasFullStop = valueEntered.includes(".");
  var indexOfAt = valueEntered.indexOf("@");
  var indexOfFStop = valueEntered.indexOf(".");

  // Check Conditions
  if ((hasAt && hasFullStop) &&
    (indexOfFStop > (indexOfAt + 2)) &&
    (indexOfFStop < (lengthOfEnteredValue - 2)) &&
    (lengthOfEnteredValue !== (indexOfFStop + 1)) &&
    (splitLengthAfterAt === 2) && (splitLengthAfterFStop === 2) &&
    (indexOfAt > 2)) {
    console.log("Valid Email address");
    inputElement.classList.remove("inputOutlineForJs");
  } else {
    console.log("Invalid email address");
    alertImg.classList.remove("visibilityForJs");
    alertMessage.classList.remove("visibilityForJs");
    inputElement.classList.add("inputOutlineForJs");
  }
});

// On clicking Input Element
inputElement.addEventListener("click", function() {
  alertImg.classList.add("visibilityForJs");
  alertMessage.classList.add("visibilityForJs");
});
