import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type ButtonNameType = 'All' | 'Active' | 'Completed'

function App() {

    // let tasks = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "ReactJS", isDone: false}
    // ]

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])

    const removeTask = (id: number) => {
        // tasks = tasks.filter(el => el.id !== id)
        // setTasks(tasks)
        setTasks(tasks.filter(el => el.id !== id))
    }

    const filterTasks = (buttonName: ButtonNameType) => {

        if (buttonName === 'Active') {
            setTasks(tasks.filter(el => !el.isDone))
        }
        if (buttonName === 'Completed') {
            setTasks(tasks.filter(el => el.isDone))
        }
        if (buttonName === 'All') {
            setTasks(tasks)
        }
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks} removeTask={removeTask} filterTasks={filterTasks}/>
        </div>
    );
}

export default App;
