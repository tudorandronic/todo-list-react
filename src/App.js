import logo from './logo.svg';
import './App.css';
import TodoTable from './components/TodoTable';
function App() {

  const todos = [
    {rowNumber: 1, rowTask: "Feed Dog", rowAssigned: "User 1"},
    {rowNumber: 2, rowTask: "Feed Pidgeon", rowAssigned: "User 2"},
    {rowNumber: 1, rowTask: "Feed Pig", rowAssigned: "User 2"}
  ];

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
            </div>
          </div>
      </div>
    </div>
    //<p>I have made my first react app </p>
  );
}

export default App;
