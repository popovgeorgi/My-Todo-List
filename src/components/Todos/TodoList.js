import React from 'react';

import './TodoList.css';

const TodoList = props => {
    return (
        <section className="ingredient-list">
            <h2>Loaded Tasks</h2>
            <ul>
                {props.tasks.map(task => (
                    <li key={task.id} onClick={props.onRemoveItem.bind(this, task.id)}>
                        <span>{task.title}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default TodoList;