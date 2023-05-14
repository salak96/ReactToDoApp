/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
const TodoItem = ({ todo }) => {
    return (
        <div  style={styles.todoItem}>
            <p>{todo.title}</p>
        </div>
    );
};

const styles = {
    todoItem: {
        border: '2px solid #f4f4f4',
        fontSize: '24px',
        padding: '10px',
        margin: '10px 0',
    },
};

export default TodoItem;
