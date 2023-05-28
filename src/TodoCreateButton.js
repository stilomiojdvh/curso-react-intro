function TodoCreateButton(){
    return(
        <button className="CreateTodoButton" 
        onClick={
            (event) => {
                console.log('Le diste click al boton')
                console.log(event.target)
            }
        }
        >+</button>
    );
}

export {TodoCreateButton};