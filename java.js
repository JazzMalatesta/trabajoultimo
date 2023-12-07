// java.js

function generar() {

  var tipoPasaje= document.getElementById('pasaje').value;
  var origen = document.getElementById('desde').value;
  var destino = document.getElementById('hasta').value;
  var diaIda = document.getElementById('fecha').value;
  var diaRegreso = document.getElementById('reg').value;
  var horaSalida = document.getElementById('hora').value;
  var clase = document.getElementById('clase').value;
  var personas = document.getElementById('personas').value;
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var celular = document.getElementById('celular').value;
  var menores = document.getElementById('menores').value;
  var mayores = document.getElementById('mayores').value;

 
  var facturaHTML = `
      <h2>Factura de Reserva de Vuelo</h2>
      <p><strong>Tipo de Pasaje:</strong> ${tipoPasaje}</p>
      <p><strong>Origen:</strong> ${origen}</p>
      <p><strong>Destino:</strong> ${destino}</p>
      <p><strong>Día de Ida:</strong> ${diaIda}</p>
      <p><strong>Día de Regreso:</strong> ${diaRegreso}</p>
      <p><strong>Hora de Salida:</strong> ${horaSalida}</p>
      <p><strong>Clase:</strong> ${clase}</p>
      <p><strong>Personas:</strong> ${personas}</p>
      <p><strong>Nombre y Apellido:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Celular:</strong> ${celular}</p>
      <p><strong>Cantidad de Menores:</strong> ${menores}</p>
      <p><strong>Cantidad de Mayores:</strong> ${mayores}</p>
  `;

  // Mostrar la factura en el elemento con el id "imprimir"
  document.getElementById('imprimir').innerHTML = facturaHTML;
}

function Generar(){ 
  alert("sadas")
var localidad= document.getElementById('Localidad').value;
var fechadeingreso = document.getElementById('ingreso').value;
var fechadesalida = document.getElementById('salida').value;
var habitaciones = document.getElementById('Habitaciones').value;
var adultos = document.getElementById('ADULTOS').value;
var niños = document.getElementById('NIÑOS').value;

alert("sadas")

var facturaHTML = `
    <h2>Factura de Reserva de Habitacion</h2>
    <p><strong>localidad:</strong> ${localidad}</p>
    <p><strong>fechadeingreso:</strong> ${fechadeingreso}</p>
    <p><strong>fechadesalida:</strong> ${fechadesalida}</p>
    <p><strong>habitaciones:</strong> ${habitaciones}</p>
    <p><strong>adultos:</strong> ${adultos}</p>
    <p><strong>niños:</strong> ${niños}</p>
    
`;

// Mostrar la factura en el elemento con el id "imprimir"
document.getElementById('Imprimir').innerHTML = facturaHTML;



}
