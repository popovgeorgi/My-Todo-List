import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function TodoForm {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })};

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    let form =
        (<form noValidate autoComplete="off">
            <div className="form-group">
                <TextField id="standard-basic" label="Name" />
            </div>
            <div className="form-group">
                <TextField id="standard-basic" label="Description" />
            </div>
            <Button variant="outlined" color="primary" type="submit">
                Add To List
                </Button>
        </form>);

    return (
        <div>
            <h1>Add New Item</h1>
            <hr />
            <form>
                <input
                    name="task"
                    type="text"
                    value={todo.task}
                    onChange={handleTaskInputChange}
                />
                <button type="submit" />
            </form>
        </div>
    );
}

export default AddItemForm;

