import logo from './logo.svg';
import './App.css';
import TodoTable from './components/TodoTable';
import TodoForm from './components/TodoForm';
import React,{useState} from 'react';

function App() {

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowTask: "Feed Dog", rowAssigned: "User 1"},
    {rowNumber: 2, rowTask: "Water plants", rowAssigned: "User 2"},
    {rowNumber: 3, rowTask: "Feed Pig", rowAssigned: "User 2"},
    {rowNumber: 4, rowTask: "Charge phone", rowAssigned: "User 1"}
  ]);

  const addTodo = (description, input) => {
    let rowNumber = 1;
    if(todos.length > 0){
      rowNumber = todos[todos.length-1].rowNumber+1;
    }

    setTodos([...todos,{rowNumber: rowNumber, rowTask:description, rowAssigned:input}]);
  }

  return (
    <div>
      <div className='container'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="mt-5 container">
          <div className='card'>
            <div className="card-header">
              Your Todo's
            </div>
            <div className="card-body">
                <TodoTable todoList={todos}/>
                <button className='btn btn-primary' onClick = {addTodo}>
                  Add new todo
                </button>
                <TodoForm todoList={todos} addTodo={addTodo}/>
            </div>
          </div>
      </div>
    </div>
    //<p>I have made my first react app </p>
  );
}

export default App;
