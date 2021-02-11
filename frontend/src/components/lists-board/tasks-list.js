import React, { useState, useEffect } from 'react'
import TaskCard from './task-card'

export default function TasksList(List){

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const ApiResponse = await fetch(`http://localhost:5000/api/list/${List.list.id}/tasks`)
            const json = await ApiResponse.json();
            setTasks(json);
        }
        fetchData();
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