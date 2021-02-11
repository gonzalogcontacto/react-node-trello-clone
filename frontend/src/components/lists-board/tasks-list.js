import React, { Component } from 'react'

class TasksList extends Component {
    
    constructor() {
        super()
    }

    render() {
        return(
            <div className="list-card">
                <h5>{this.props.name}</h5>
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                </ul>
            </div>
        )
            
    }
}

export default TasksList