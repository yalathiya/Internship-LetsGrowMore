let submit = document.querySelector("#submit-button");
submit.onClick = myFunction();
myFunction = () => {
  document.getElementById("student-name").innerHTML =
    document.getElementById("name-input").value;
};
