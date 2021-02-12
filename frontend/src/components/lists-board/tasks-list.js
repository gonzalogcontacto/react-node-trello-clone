import React, { useState, useEffect } from 'react'
import API from '../../helper/api';
import TaskCard from './task-card'
import AddTaskForm from './add-task-form';

const TasksList = List => {
//export default function TasksList(List){

    const [tasks, setTasks] = useState([]);

    useEffect(() => {

        API.lists.getTasksOfList(List.list.id)
        .then(result => {
            setTasks(result);  
        });
    }, [])

       
	const addTask = task => {
        task.id = tasks.length + 1
        API.tasks.createTask(task)
        .then(taskRes => {
            setTasks([ ...tasks, taskRes ])
        });
	}

    if(!tasks) {
        return <div>Loading...</div>
    }


    return(
        <div className="list-card">
            <h5>{List.list.name}</h5>
            <ul>
                {tasks.map(elm => <TaskCard key={elm.id} name={elm.name}/> )}
            </ul>
            <AddTaskForm  addTask={addTask}/>
        </div>
    )
}
export default TasksList
