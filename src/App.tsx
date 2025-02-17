import './App.css';
import { TodoTable } from './components/TodoTable';
import { TodoForm } from './components/TodoForm';
import React,{useState} from 'react';

export const App = () => {

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: "Feed Dog", rowAssigned: "User 1"},
    {rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User 2"},
    {rowNumber: 3, rowDescription: "Feed Pig", rowAssigned: "User 2"},
    {rowNumber: 4, rowDescription: "Charge phone", rowAssigned: "User 1"}
  ]);

  const [showTodoForm, setShowTodoForm] = useState(false);

  const showTodo = () =>{
    if(!showTodoForm){
      setShowTodoForm(true);
    } else {
      setShowTodoForm(false);
    }
  }

  const addTodo = (description:string, input:string) => {
    let rowNumber = 1;
    if(todos.length > 0){
      rowNumber = todos[todos.length-1].rowNumber+1;
    }

    setTodos([...todos,{rowNumber: rowNumber, rowDescription:description, rowAssigned:input}]);
  }

  const deleteTodo = (deleteTodoRowItem:number) => {
    let filtered = todos.filter(
      function(todo) {
        return todo.rowNumber !== deleteTodoRowItem
      }
    );
    setTodos(filtered);
  }

  return (
    <div>
      <div className="mt-5 container">
          <div className='card'>
            <div className="card-header">
              Your Todo's
            </div>
            <div className="card-body">
                <TodoTable todoList={todos} deleteTodo ={deleteTodo}/>
                <button className='btn btn-primary' onClick = {showTodo}>
                  {showTodoForm ? "Close New Todo" : "New Todo"}
                </button>
                {
                  showTodoForm && 
                  <TodoForm addTodo={addTodo} showTodo={showTodo}/>
                }
            </div>
          </div>
      </div>
    </div>
    //<p>I have made my first react app </p>
  );
}

