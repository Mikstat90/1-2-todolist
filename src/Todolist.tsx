import React from 'react';
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
    filterTasks: (buttonName: ButtonNameType) => void
}

export function Todolist(props: PropsType) {

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map(t => <li key={t.id}>
                <button onClick={() => props.removeTask(t.id)}>X</button>
                <input type="checkbox" checked={t.isDone}/><span>{t.title}</span>
            </li>)}
        </ul>
        <div>
            <button onClick={() => props.filterTasks('All')}>All</button>
            <button onClick={() => props.filterTasks('Active')}>Active</button>
            <button onClick={() => props.filterTasks('Completed')}>Completed</button>
        </div>
    </div>
}
