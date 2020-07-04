import React, { useState } from 'react';

import TodoForm from './TodoForm';
import Search from './Search';
import TodoList from './TodoList';

const Todos = () => {
    const [userTasks, setUserTasks] = useState([]);

    const addTaskHandler = task => {
        setUserTasks(prevTasks => [
            ...prevTasks,
            { id: Math.random().toString(), ...task }
        ]);
    };

    const removeTaskHandler = taskId => {
        setUserTasks(prevTasks =>
            prevTasks.filter(task => task.id !== taskId)
        );
    };


    return (
        <div className="App">
            <TodoForm onAddTask={addTaskHandler} />

            <section>
                <Search />
                <TodoList
                    tasks={userTasks}
                    onRemoveItem={removeTaskHandler}
                />
            </section>
        </div>
    )
}

export default Todos;