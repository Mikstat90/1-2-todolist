import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type ButtonNameType = 'All' | 'Active' | 'Completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])

    const removeTask = (id: number) => {
        setTasks(tasks.filter(el => el.id !== id))
    }

    // let [filteredTasks, setFilteredTasks] = useState<ButtonNameType>('All')
    //
    // const filterTasks = (buttonName: ButtonNameType) => {
    //     setFilteredTasks(buttonName)
    // }
    //
    // let durshlag = tasks
    // if (filteredTasks === 'Active') {
    //     durshlag = tasks.filter(el => !el.isDone)
    // }
    // if (filteredTasks === 'Completed') {
    //     durshlag = tasks.filter(el => el.isDone)
    // }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks}
                removeTask={removeTask}/>
        </div>
    );
}

export default App;
