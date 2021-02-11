import React, { useState, useEffect } from 'react'
import TaskCard from './task-card'
import API from '../../helper/api';

const TasksList = List => {
//export default function TasksList(List){

    const [tasks, setTasks] = useState([]);

    useEffect(() => {

        API.lists.getTasksOfList(List.list.id)
        .then(result => {
            setTasks(result);  
        });
    }, [])

    if(!tasks) {
        return <div>Loading...</div>
    }


    return(
        <div className="list-card">
            <h5>{List.list.name}</h5>
            <ul>
                {tasks.map(elm => <TaskCard key={elm.id} name={elm.name}/> )}
            </ul>
            <div>
                <input></input><button> Añadir Tarea</button>
            </div>
        </div>
    )
}
export default TasksList
