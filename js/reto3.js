function sumar_lista(lista) {
  let suma = 0;
  for (let num of lista) {
    suma += num;
  }
  return suma;
}

function sumar() {
  const entrada = document.getElementById("lista").value.trim();
  const resultado = document.getElementById("resultado");

  if (entrada === "") {
    resultado.textContent = "⚠️ Ingresa al menos un número.";
    resultado.className = "resultado error";
    return;
  }

  const numeros = entrada.split(",").map(n => Number(n.trim()));

  if (numeros.some(isNaN)) {
    resultado.textContent = "❌ La lista contiene valores inválidos.";
    resultado.className = "resultado error";
    return;
  }

  const total = sumar_lista(numeros);
  resultado.textContent = `✅ La suma total es: ${total}`;
  resultado.className = "resultado valido";
}
