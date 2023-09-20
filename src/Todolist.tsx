import React, {useState} from 'react';
import {ButtonNameType} from './App';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
}

export function Todolist(props: PropsType) {

    let [filteredTasks, setFilteredTasks] = useState<ButtonNameType>('All')

    const filterTasks = (buttonName: ButtonNameType) => {
        setFilteredTasks(buttonName)
    }

    let durshlag = props.tasks
    if (filteredTasks === 'Active') {
        durshlag = props.tasks.filter(el => !el.isDone)
    }
    if (filteredTasks === 'Completed') {
        durshlag = props.tasks.filter(el => el.isDone)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {durshlag.map(t => <li key={t.id}>
                <button onClick={() => props.removeTask(t.id)}>X</button>
                <input type="checkbox" checked={t.isDone}/><span>{t.title}</span>
            </li>)}
        </ul>
        <div>
            <button onClick={() => filterTasks('All')}>All</button>
            <button onClick={() => filterTasks('Active')}>Active</button>
            <button onClick={() => filterTasks('Completed')}>Completed</button>
        </div>
    </div>
}
