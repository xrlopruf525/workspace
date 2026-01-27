interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

const tareas: Tarea[] = [
  { id: 1, texto: "Aprender TypeScript", completada: true },
  { id: 2, texto: "Practicar interfaces", completada: false },
  { id: 3, texto: "Usar métodos de arrays", completada: true },
];


function buscarTarea(id: number): void {
  const tarea = tareas.find(t => t.id === id);

  if (tarea) {
    const estado = tarea.completada ? "Completada" : "Pendiente";
    console.log(`Tarea: "${tarea.texto}" - Estado: ${estado}`);
  } else {
    console.log(`No se encontró ninguna tarea con ID ${id}`);
  }
}

buscarTarea(2); 
buscarTarea(5); 