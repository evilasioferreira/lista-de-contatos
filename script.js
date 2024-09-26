document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const fname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    addContact(fname, email, phone);

    // Limpa os campos após adicionar
    document.getElementById("contactForm").reset();
  });

function addContact(name, email, phone) {
  const contactList = document.getElementById("contactList");

  const li = document.createElement("li");
  li.innerHTML = `Nome:${name} <br> Email: ${email} <br> Telefone: ${phone}<br>`;

  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.onclick = function () {
    editContact(li, name, email, phone);
  };

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  deleteButton.onclick = function () {
    contactList.removeChild(li);
  };

  li.appendChild(editButton);
  li.appendChild(deleteButton);
  contactList.appendChild(li);
}

function editContact(li, name, email, phone) {
  const newName = prompt("Editar Nome:", name);
  const newEmail = prompt("Editar Email:", email);
  const newPhone = prompt("Editar Telefone:", phone);

  if (newName && newEmail && newPhone) {
    li.innerHTML = `Nome: ${newName} <br> Email: ${newEmail} <br> Telefone: ${newPhone} <br>`;

    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.onclick = function () {
      editContact(li, newName, newEmail, newPhone);
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.onclick = function () {
      const contactList = document.getElementById("contactList");
      contactList.removeChild(li);
    };

    li.appendChild(editButton);
    li.appendChild(deleteButton);
  }
}
