interface BotonProps {
  label: string;
  onClick: (id: number) => void;
}

function clickBoton(props: BotonProps): void {
  console.log(`Renderizando botón: ${props.label}`);
  props.onClick(58);
}

const botonEliminar: BotonProps = {
  label: "Eliminar usuario",
  onClick: (id: number): void => {
    console.log(`Borrando usuario ${id}`);
  }
};

clickBoton(botonEliminar);
