import React from 'react';

function TodoSearch({
  searchValue,
  setSearchValue
}){

    return (
      <input className="TodoSearch" placeholder="Escribe una tarea"
      value={searchValue} 
      onChange={
        (event)=>{
          setSearchValue(event.target.value);
      }}      
      />
    );
}

export {TodoSearch};