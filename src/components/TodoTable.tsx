import React from "react";
import { TodoRowItem } from "./TodoRowItem";

export const TodoTable: React.FC<{todoList: TodoModel[], deleteTodo: Function}> = (props) => {
    const todoList = props.todoList;
    const deleteTodo = props.deleteTodo;
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
                  <TodoRowItem key={todo.rowNumber} rowNumber={todo.rowNumber} rowDescription={todo.rowDescription} rowAssigned={todo.rowAssigned} deleteTodo={deleteTodo}/>
              ))
            }
          </tbody>
        </table>  
    )
}