function validar_password(pass) {
  const tieneLongitud = pass.length >= 6;
  const tieneLetra = /[a-zA-Z]/.test(pass);
  const tieneNumero = /[0-9]/.test(pass);
  return tieneLongitud && tieneLetra && tieneNumero;
}

function validar() {
  const pass = document.getElementById("password").value;
  const resultado = document.getElementById("resultado");

  if (validar_password(pass)) {
    resultado.textContent = "✅ True";
    resultado.className = "resultado valido";
  } else {
    resultado.textContent = "❌ False";
    resultado.className = "resultado invalido";
  }
}