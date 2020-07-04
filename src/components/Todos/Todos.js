import React, { useState, useEffect } from 'react';

import TodoForm from './TodoForm';
import Search from './Search';
import TodoList from './TodoList';

const Todos = () => {
    const [userTasks, setUserTasks] = useState([]);

    useEffect(() => {
        fetch('https://my-todo-app-d3e3e.firebaseio.com/tasks.json').then(
            response => response.json()
        ).then(responseData => {
            const loadedTasks = [];
            for (const key in responseData) {
                loadedTasks.push({
                    id: key,
                    title: responseData[key].title
                });
            }
            setUserTasks(loadedTasks);
        });
    }, []);

    const addTaskHandler = task => {
        fetch('https://my-todo-app-d3e3e.firebaseio.com/tasks.json', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            return response.json();
        }).then(responseData => {
            setUserTasks(prevTasks => [
                ...prevTasks,
                { id: responseData.name, ...task }
            ]);
        });
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