function validarFormulario() {
  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let senha = document.getElementById("senha").value.trim();
  let telefone = document.getElementById("telefone").value.trim();
  let idade = document.getElementById("idade").value.trim();

  if (!nome || !email || !senha || !telefone) {
    mostrarMensagem("Por favor, preencha todos os campos obrigatórios!", true);
    return false;
  }

  // Validação de telefone (formato brasileiro simples)
  let telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
  if (!telefoneRegex.test(telefone)) {
    mostrarMensagem("Telefone inválido! Use o formato (99) 99999-9999.", true);
    return false;
  }

  return true;
}

function mostrarMensagem(msg, erro=false) {
  let div = document.getElementById("mensagem");
  div.textContent = msg;
  div.style.color = erro ? "#ff4444" : "#44ff44";
  div.style.fontWeight = "bold";
  div.style.marginTop = "10px";
}

function limparFormulario() {
  document.getElementById("formCadastro").reset();
  mostrarMensagem("");
}

function enviarFormulario(event) {
  event.preventDefault();
  if (validarFormulario()) {
    mostrarMensagem("Cadastro realizado com sucesso!");
    // Aqui você pode enviar via fetch/XHR se quiser
    // document.getElementById("formCadastro").reset();
  }
  return false;
}
