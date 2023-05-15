/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';


const TodoItem = ({ todo, toggleCompleted }) => {
    // Definisikan function getTodoTitleStyle di sini
    const getTodoTitleStyle = () => {
        if (todo.completed === true) {
            return { textDecoration: 'line-through' };
        } else {
            return { textDecoration: 'none' };
        }
    };
    function hapus({todos}){
        // const hapus = todos.filter((todo) => todo.id !== todo.id);
        // setTodos(hapus);
        // console.log(`Todo dengan id ${todo.id} telah dihapus`);
    }

    return (
        <div style={styles.todoItem}>
            <input type='checkbox' style={styles.checkbox} onChange={() => toggleCompleted(todo.id)} />
            <p style={getTodoTitleStyle()}>{todo.title}</p>
            <button onClick={hapus} style={styles.button}>x</button>
        </div>
    );
};

const styles = {
    todoItem: {
        border: '2px solid #000000',
        fontSize: '24px',
        backgroundColor: 'white',
        // Tambahkan styles di bawah ini
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        margin: '10px',
    },
    // Tambahkan styles di bawah ini
    checkbox: {
        marginRight: '10px',
        height: '18px',
        width: '18px',
    },
    button: {
        backgroundColor: '#BB0000',
        color: '#fff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        marginLeft: 'auto',

      },
};

export default TodoItem;
