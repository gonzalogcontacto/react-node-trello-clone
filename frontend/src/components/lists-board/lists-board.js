import React, { Component } from 'react'
import './lists-board.css';
import TasksList from './tasks-list'

class ListsBoard extends Component {
    
    constructor() {
        super()
        this.state = {
            lists: [{"id":1, "name": 'TO DO'}, {"id":2, "name": 'DOING'}, {"id":3, "name": 'DOING'}, {"id":4, "name": 'DOING'}]
        }
    }

    render() {
        return (
            <>  
                <h2>Board para GeeksHubs Academy</h2>
                <div>
                    <input></input><button> Añadir lista</button>
                </div>
                <ul>
                    {this.state.lists.map(elm => <TasksList key={elm.id} name={elm.name}/> )}
                </ul>
            </>
        )
    }
}

export default ListsBoard;