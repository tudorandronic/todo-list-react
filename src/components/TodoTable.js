import TodoRowItem from "./TodoRowItem";

function TodoTable(props){
    const todoList = props.todoList;
    return (
        <table className='table table-hover'>
          <thead>
            <tr>
                <th>
                  #
                </th>
                <th>
                  Description
                </th>
                <th>
                  Assigned
                </th>  
            </tr>
          </thead>
          <tbody>
            {
              todoList.map(todo => (
                  <TodoRowItem key={todo.rowNumber} rowNumber={todo.rowNumber} rowDescription={todo.rowTask} rowAssigned={todo.rowAssigned}/>
              ))
            }
          </tbody>
        </table>  
    )
}

export default TodoTable;