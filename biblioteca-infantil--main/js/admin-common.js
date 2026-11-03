function mostrarAlertaResultado(tipo, mensaje) {
  const alerta = document.getElementById('alerta-resultado')
  alerta.className = `alert alert-${tipo}`
  alerta.textContent = mensaje
  alerta.classList.remove('d-none')
  setTimeout(() => alerta.classList.add('d-none'), 4000)
}

function inicializarAdmin() {
  cargarNavbar('../')
  protegerRutaAdmin()
}