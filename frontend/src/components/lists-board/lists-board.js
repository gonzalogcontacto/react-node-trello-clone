import React, { Component } from 'react'

class ListsBoard extends Component {
    constructor() {
        super()
        this.state = {
            lists: [{"id":1, "name": 'TO DO'}, {"id":2, "name": 'DOING'}]
        }
    }

    render() {
        return (
            <>  
                <h2>Listas del Board por defecto</h2>
                <ul>
                    {this.state.lists.map(elm => <div key={elm.id} {...elm}/>)}
                </ul>
            </>
        )
    }
}

export default ListsBoard;