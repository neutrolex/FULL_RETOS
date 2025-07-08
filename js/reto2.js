function es_par(n) {
  return n % 2 === 0;
}

function verificarPar() {
  const num = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(num)) {
    resultado.textContent = "⚠️ Ingresa un número válido.";
    resultado.className = "resultado error";
    return;
  }

  if (es_par(num)) {
    resultado.textContent = `✅ El número ${num} es PAR.`;
    resultado.className = "resultado valido";
  } else {
    resultado.textContent = `❌ El número ${num} es IMPAR.`;
    resultado.className = "resultado invalido";
  }
}
