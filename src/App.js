import logo from './platzi.webp';
//import './App.css';
import './Todo.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';
import React from 'react';

const defaultTodos = [
  {text: 'Ver curso de React.JS', completed:false},
  {text: 'Leer libro de Crea', completed:true},
  {text: 'Actualizar pizarra de pendientes', completed:false},
  {text: 'Ordenar la habitacion', completed:true},
  {text: 'Enviar correo electronico', completed:false},
  {text: 'Hacer jugo de naranja', completed:false},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(x => !!x.completed).length;
  const totalTodos = todos.length;

  //Filtra la lista con el estado de busqueda
  const searchedTodos = todos.filter(x =>{
      return x.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
      }
    ); 

  console.log('Los usuarios buscan: ' + searchValue);

  const completeTodo = (textKey) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(x => x.text == textKey)
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (textKey) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(x => x.text == textKey)
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(x => (
          <TodoItem key={x.text} text={x.text} completed={x.completed} 
          onComplete={() => completeTodo(x.text)} 
          onDelete={() => deleteTodo(x.text)}          
          />
        ))}        
      </TodoList>
      
      <TodoCreateButton />

      </React.Fragment>
  );
}

export default App;
