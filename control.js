let usu = "usuario";
let pass = document.getElementById('pass');

function enviar() {
  if (usu.value == '' || pass.value == '') {
    alert('Todos los campos son obligatorios');
  } if (!usu.includes("@")) {
    alert('Falta un arroba en el usuario');
  }
}