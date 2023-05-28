import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';
import React from 'react';

const defaultTodos = [
  {text: 'Ver curso', completed:false},
  {text: 'Ver netflix', completed:true},
  {text: 'Cocinar', completed:false},
  {text: 'Limpiar', completed:false},
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}        
      </TodoList>
      
      <TodoCreateButton />

      </React.Fragment>
  );
}

export default App;
