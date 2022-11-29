const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

submitButton.onClick = () => {
  document.getElementById("#studentColumn").appendChild(para);
};
