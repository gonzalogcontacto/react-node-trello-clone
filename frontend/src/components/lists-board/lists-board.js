import React, { Component } from 'react'
import './lists-board.css';

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
                <h2>Listas del Board por defecto</h2>
                <ul>
                    {this.state.lists.map(elm => <div key={elm.id} className="list-card"  /> )}
                </ul>
            </>
        )
    }
}

export default ListsBoard;