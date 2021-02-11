import React, { Component } from 'react'

class ListsBoard extends Component {
    constructor() {
        super()
        this.state = {
            lists: [{"name": 'TO DO'}, {"name": 'DOING'}]
        }
    }

    render() {
        return (
            <>
                <ul>
                    {lists.map(elm => <div key={elm.id} {...elm}/>)}
                </ul>
            </>
        )
    }
}

export default MoviesList;