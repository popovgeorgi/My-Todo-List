import React, { useState } from 'react';

import Card from '../UI/Card';
import './TodoForm.css';

const TodoForm = (props => {
    const [enteredTitle, setEnteredTitle] = useState('');

    const submitHandler = event => {
        event.preventDefault();
        props.onAddTask({ title: enteredTitle });
      };

    return (
        <section className="form">
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={enteredTitle}
                            onChange={event => {
                                setEnteredTitle(event.target.value);
                            }}
                        />
                    </div>
                    <div className="ingredient-form__actions">
                        <button type="submit">Add Task</button>
                    </div>
                </form>
            </Card>
        </section>
    );
});

export default TodoForm;