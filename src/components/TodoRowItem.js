function TodoRowItem(props){
    return (
        <tr scope="row" onClick={() => props.deleteTodo(props.rowNumber)}>
            <th>
                {props.rowNumber}
            </th>
            <td>
                {props.rowDescription}
            </td>
            <td>
                {props.rowAssigned}
            </td>
        </tr>
    )
}

export default TodoRowItem;