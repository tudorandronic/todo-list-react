import React,{useState} from "react";

function TodoForm(props){

    const addTodo = () => {
        props.setTodos([...props.todoList, {rowNumber: props.todoList.length+1, rowTask: textarea, rowAssigned:input}]);
    }

    const [textarea, setTextarea] = useState(
        ""
    );

    const [input, setInput] = useState(
        ""
    )

    const handleChangeTextArea = (event) => {
        setTextarea(event.target.value);
    }

    const handleChangeInput = (event) => {
        setInput(event.target.value);
    }

    return (
        <div className='mt-5'>
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input value={input} onChange={handleChangeInput} type='text' className="form-control" required></input>
                </div>
                <div className="mb-3">
                    <label className='form-label'>Description</label>
                    <textarea value={textarea} onChange={handleChangeTextArea} className='form-control' rows={3} required></textarea>
                </div>
                <button type = 'button' className='btn btn-primary  mt-3' onClick={addTodo}>Add new todo</button>
            </form>
        </div>
    )
}

export default TodoForm;