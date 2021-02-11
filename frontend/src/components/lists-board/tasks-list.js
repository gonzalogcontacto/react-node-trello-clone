import React, { Component } from 'react'
import TaskCard from './task-card'

class TasksList extends Component {
    
    constructor() {
        super()

        this.state = {
            tasks: [{"id":1, "name": 'Task 1'}, {"id":2, "name": 'Task 2'}]
        }
    }

    render() {
        return(
            <div className="list-card">
                <h5>{this.props.name}</h5>
                <ul>
                    {this.state.tasks.map(elm => <TaskCard key={elm.id} name={elm.name}/> )}
                </ul>
                <div>
                    <input></input><button> Añadir Tarea</button>
                </div>
            </div>
        )
            
    }
}

export default TasksList