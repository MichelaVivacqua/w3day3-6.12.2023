const pageForm = document.getElementById("buonipropositi");
pageForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInputField = document.getElementById("principale");
  console.log(nameInputField.value);
  const userCard = document.createElement("div");
  userCard.innerHTML = `
    <p> ${nameInputField.value}</p>`;
  nameInputField.value = "";
  userCard.addEventListener("click", function () {
    this.classList.toggle("tagliato");
  });
  const button = document.createElement("button");
  button.innerHTML = "Elimina";

  button.addEventListener("click", function () {
    alert("Hai cliccato il bottone!");
  });
  userCard.appendChild(button);

  const listaDeiDesideri = document.getElementById("listadeidesideri");
  listaDeiDesideri.appendChild(userCard);
});
