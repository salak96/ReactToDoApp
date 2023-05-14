/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Todos from './components/Todos';
function App() {
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

    return (
        <div className={'bg-slate-600 grid justify-items-start md:justify-items-center'}>
            <h1 className={'text-xl m-2 text-white'}>My Todo List</h1>
            <div className={'flex justify-center m-5'}>
                <input className={'transition duration-300 w-full focus:outline-none focus:ring border-black focus:ring-blue-200 focus:border-blue-400 text-blackshadow-sm rounded-lg m-2'} type='text' placeholder='Add Todo' />
                <button className={'font-medium inline-flex justify-center whitespace-nowrap items-center gap-x-2 text-sm text-white px-4 h-10 rounded bg-red-600'}>Add Todo</button>
            </div>
            <Todos todos={todos} />
        </div>
    );
}

export default App;
