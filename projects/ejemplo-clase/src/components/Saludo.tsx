import React from "react";

interface SaludoProps {
  nombre: string;
  apellidos: string;
  edad: number;
}

const Saludo = ({nombre,apellidos,edad}: SaludoProps) => {
  return (
    <>
      <h2>Hola{nombre}</h2>
      <div>
        Sr/Sra {apellidos} esta usted hecho un chaval con {edad}{" "}
        años
      </div>
    </>
  );
};

export default Saludo;
