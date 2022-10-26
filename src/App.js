import React from 'react'
import './App.css';
import TodosList from './Components/ListTask'
import AddTodo from './Components/AddTask'
import Filter from './Components/Filter'


function App() {
  
  
  return (
    <div className="App">
      <Filter />
      <AddTodo />
   <TodosList  />
    </div>
  );
}

export default App