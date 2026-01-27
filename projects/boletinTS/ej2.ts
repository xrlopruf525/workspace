type EstadoCarga = "idle" | "loading" | "success" | "error";

interface Usuario {
  id: number;
  nombre: string;
}

interface RespuestaAPI {
  estado: EstadoCarga;
  usuario: Usuario | null;
}

function procesarRespuesta(respuesta: RespuestaAPI) {
  if (respuesta.estado === "loading") {
    console.log("Cargando...");
  } else if (respuesta.estado === "error") {
    console.log("Ha ocurrido un error");
  } else if (respuesta.estado === "success" && respuesta.usuario) {
    console.log(`Bienvenido ${respuesta.usuario.nombre}`);
  }
}

procesarRespuesta({
  estado: "success",
  usuario: { id: 1, nombre: "Carlos" },
});
