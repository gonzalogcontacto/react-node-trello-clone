import React, { useEffect, useState } from 'react'
import './lists-board.css';
import TasksList from './tasks-list'
import API from '../../helper/api';

export default function ListsBoard(){
    
    const [lists, setLists] = useState([]);

    useEffect(() => {
        API.lists.getListsOfBoard()
            .then(result => {
                setLists(result);  
            });
    }, [])

        if(!lists) {
            return <div>Loading...</div>
        }

        return (
            <>  
                <h2>Board para GeeksHubs Academy</h2>
                <div>
                    <input></input><button> Añadir lista</button>
                </div>
                <ul>
                    {lists.map(list => <TasksList key={list.id} list={list} /> )}
                </ul>
            </>
        )
}