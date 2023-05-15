/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem.jsx';
// Menerima function toggleCompleted sebagai sebuah prop
const Todos = ({ todos, toggleCompleted }) => {
    return (
        <div style={styles.container}>
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        // Teruskan function toggleCompleted ke component TodoItem
                        toggleCompleted={toggleCompleted}
                    />
                );
            })}
        </div>
    );
};

const styles = {
    container: {
        width: '40%',
        margin: '0 auto',
    },
};

export default Todos;
