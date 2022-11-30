function submitFunction() {
  var name = document.getElementById("nameInput").value;
  document.getElementById("studentName").innerHTML = name;

  var email = document.getElementById("emailInput").value;
  document.getElementById("studentEmail").innerHTML = email;

  var website = document.getElementById("websiteInput").value;
  document.getElementById("studentWebsite").innerHTML = website;

  var image = document.getElementById("imageInput").value;
  document.getElementById("studentImage").src = image;

  if (document.getElementById("Male").checked) {
    var gender = document.getElementById("Male").value;
    document.getElementById("studentGender").innerHTML = gender;
  }

  if (document.getElementById("Female").checked) {
    var gender = document.getElementById("Female").value;
    document.getElementById("studentGender").innerHTML = gender;
  }

  if (
    document.getElementById("java").checked &&
    document.getElementById("html").checked &&
    document.getElementById("css").checked
  ) {
    var skills = "Java, HTML, CSS";
    document.getElementById("studentSkills").innerHTML = skills;
  } else if (
    document.getElementById("java").checked &&
    document.getElementById("html").checked
  ) {
    var skills = "Java, HTML";
    document.getElementById("studentSkills").innerHTML = skills;
  } else if (
    document.getElementById("java").checked &&
    document.getElementById("css").checked
  ) {
    var skills = "Java, CSS";
    document.getElementById("studentSkills").innerHTML = skills;
  } else if (
    document.getElementById("html").checked &&
    document.getElementById("css").checked
  ) {
    var skills = " HTML, CSS";
    document.getElementById("studentSkills").innerHTML = skills;
  } else if (document.getElementById("java").checked) {
    var skills = "Java";
    document.getElementById("studentSkills").innerHTML = skills;
  } else if (document.getElementById("html").checked) {
    var skills = "HTML";
    document.getElementById("studentSkills").innerHTML = skills;
  } else if (document.getElementById("css").checked) {
    var skills = "CSS";
    document.getElementById("studentSkills").innerHTML = skills;
  }
}
function clearFunction() {
  document.getElementById("nameInput").value = "";

  document.getElementById("emailInput").value = "";

  document.getElementById("websiteInput").value = "";

  document.getElementById("imageInput").value = "";

  document.getElementById("Male").checked = false;

  document.getElementById("Female").checked = false;

  document.getElementById("java").checked = false;

  document.getElementById("html").checked = false;

  document.getElementById("css").checked = false;
}
