import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
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

export {AppUI};