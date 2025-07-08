function validar_email(correo) {
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return regex.test(correo);
}

function validar() {
  const correo = document.getElementById("email").value;
  const resultado = document.getElementById("resultado");

  if (validar_email(correo)) {
    resultado.textContent = "✅ El correo es válido.";
    resultado.className = "resultado valido";
  } else {
    resultado.textContent = "❌ El correo NO es válido.";
    resultado.className = "resultado invalido";
  }
}
