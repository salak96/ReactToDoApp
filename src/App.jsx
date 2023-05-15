/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Todos from './components/Todos';
function App() {
    const [namaTask, setNamaTask] = useState('');
    const toggleCompleted = (id) => {
        console.log(id);
    };
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Finish Progate React Course',
            completed: false,
        },
        {
            id: 2,
            title: 'Have lunch with Guru Domba',
            completed: false,
        },
        {
            id: 3,
            title: 'Study React with Ninja Ken',
            completed: false,
        },
    ]);
    function AddTodo() {
        const newTodo = {
            id: todos.length + 1,
            title: namaTask,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setNamaTask('');
    }
    function DelTodo() {
        setTodos(todos.slice(0, -1));
    }

    return (
        <div className={'bg-slate-600 grid justify-items-start md:justify-items-center'}>
            <h1 className={'flex text-xl m-2 text-white justify-items-start md:justify-items-center'}>My Todo List</h1>
            <div className={'flex justify-center m-5'}>
                <input
                    
                    value={namaTask}
                    onChange={(e) => setNamaTask(e.target.value)}
                    className={
                        'transition duration-300 w-full focus:outline-none focus:ring border-black focus:ring-blue-200 focus:border-blue-400 text-blackshadow-sm rounded-lg m-1 p-2'
                    }
                    type='text'
                    placeholder='Add Todo'
                />
                <button
                    onClick={AddTodo}
                    className={
                        'font-medium inline-flex justify-center whitespace-nowrap items-center gap-x-2 text-sm text-white px-4 h-10 rounded bg-blue-600 m-1'
                    }
                >
                    Add Todo
                </button>
                <button
                    onClick={DelTodo}
                    className={
                        'font-medium inline-flex justify-center whitespace-nowrap items-center gap-x-2 text-sm text-white px-4 h-10 rounded bg-red-600 m-1'
                    }
                >
                    Delete Todo
                </button>
            </div>
            <Todos todos={todos} toggleCompleted={toggleCompleted} />
        </div>
    );
}

export default App;
