//import logo from './css/platzi.webp';
//import './App.css';
import './css/Todo.css';
// import { TodoCounter } from './TodoCounter';
// import { TodoSearch } from './TodoSearch';
// import { TodoList } from './TodoList';
// import { TodoItem } from './TodoItem';
// import { TodoCreateButton } from './TodoCreateButton';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   {text: 'Ver curso de React.JS', completed:false},
//   {text: 'Leer libro de Crea', completed:true},
//   {text: 'Actualizar pizarra de pendientes', completed:false},
//   {text: 'Ordenar la habitacion', completed:true},
//   {text: 'Enviar correo electronico', completed:false},
//   {text: 'Hacer jugo de naranja', completed:false},
// ];

// localStorage.setItem('TODOS_V1', defaultTodos);
//localStorage.removeItem('TODOS_V1');

function App() { 

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
    saveTodos(newTodos);
  };

  const deleteTodo = (textKey) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(x => x.text == textKey)
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI  
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
