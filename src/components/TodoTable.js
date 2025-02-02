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
                    <TodoRowItem rowNumber={todoList[0].rowNumber} rowDescription={todoList[0].rowTask} rowAssigned={todoList[0].rowAssigned}/>
                    <TodoRowItem rowNumber={todoList[1].rowNumber} rowDescription={todoList[1].rowTask} rowAssigned={todoList[1].rowAssigned}/>
                    <TodoRowItem rowNumber={todoList[2].rowNumber} rowDescription={todoList[2].rowTask} rowAssigned={todoList[2].rowAssigned}/>
                  </tbody>
                </table>  
    )
}

export default TodoTable;