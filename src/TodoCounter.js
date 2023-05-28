const estilos = {
  backgroundColor: 'red'
}

function TodoCounter({completed,total}){
    return (
      <h1>
        Has completado {completed} a {total} TODOS
      </h1>
    );
}

export {TodoCounter};