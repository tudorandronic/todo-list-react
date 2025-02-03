import logo from './logo.svg';
import './App.css';
import TodoTable from './components/TodoTable';
import React,{useState} from 'react';

function App() {

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowTask: "Feed Dog", rowAssigned: "User 1"},
    {rowNumber: 2, rowTask: "Water plants", rowAssigned: "User 2"},
    {rowNumber: 3, rowTask: "Feed Pig", rowAssigned: "User 2"},
    {rowNumber: 4, rowTask: "Charge phone", rowAssigned: "User 1"}
  ]);

  const addTodo = () => {
    //if(todos.length > 0){
      setTodos([...todos,{rowNumber: todos.length+1, rowTask:"Learn React", rowAssigned:"User 3"}]);
    //}
  }

  return (
    <div>
      <div class='container'>
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
            </div>
          </div>
      </div>
    </div>
    //<p>I have made my first react app </p>
  );
}

export default App;
