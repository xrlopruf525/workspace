interface Docente {
  nombre: string;
  modulo: string;
}

function saludar(docente: Docente) {
  console.log(
    `Bienvenido, ${docente.nombre}. Preparado para el módulo ${docente.modulo}.`
  );
}

saludar({
  nombre: "Ana",
  modulo: "Desarrollo Web"
});