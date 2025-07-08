function aplicar_descuento(precio, porcentaje) {
  return precio - (precio * porcentaje / 100);
}

function calcular() {
  const precio = parseFloat(document.getElementById("precio").value);
  const descuento = parseFloat(document.getElementById("descuento").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(precio) || isNaN(descuento) || precio < 0 || descuento < 0) {
    resultado.textContent = "❌ Ingresa valores válidos (positivos).";
    resultado.className = "resultado error";
    return;
  }

  const final = aplicar_descuento(precio, descuento).toFixed(2);
  resultado.textContent = `✅ Precio final con descuento: S/ ${final}`;
  resultado.className = "resultado valido";
}
