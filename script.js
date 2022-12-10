const inputText = document.getElementById("inputText");
const buttonCadastrar = document.getElementById("buttonCadastrar");
const ul = document.getElementById("listaCompras");
const buttonClear = document.getElementById("buttonClear");

buttonCadastrar.addEventListener("click", cadastrarItem);

function cadastrarItem() {
  item = inputText.value;
  if (!item) {
    alert("Digite o nome do item para cadastrar!...");
  } else {
    inputText.value = "";
    inserirLi(item);
  }
}

function inserirLi(texto) {
  const li = document.createElement("li");

  li.setAttribute("class", "itemCompra");
  li.innerText = texto;

  ul.appendChild(li);

  const divButton = document.createElement("div");
  const buttonDelet = document.createElement("button");
  const buttonCheck = document.createElement("button");

  buttonDelet.setAttribute("class", "butonIcon");
  buttonCheck.setAttribute("class", "butonIcon");

  buttonCheck.innerHTML =
    '<span class="material-symbols-outlined iconCheck"> check </span>';
  buttonDelet.innerHTML =
    '<span class="material-symbols-outlined iconDelet"> delete </span>';

  li.appendChild(divButton);
  divButton.appendChild(buttonDelet);
  divButton.appendChild(buttonCheck);

  buttonDelet.addEventListener("click", excluir);
  buttonCheck.addEventListener("click", checked);
}

function excluir(event) {
  const li = event.target.parentElement.parentElement.parentElement;
  li.remove();
}

function checked(event) {
  const li = event.target.parentElement.parentElement.parentElement;
  li.classList.toggle("itemComprado");
}

buttonClear.addEventListener("click", limparTudo);

function limparTudo() {
  let lis = ul.children;

  for (i = 0; i < lis.length; i++) {
    lis[i].remove();
    limparTudo();
  }
}
