import React, { useEffect, useState } from 'react'
import './lists-board.css';
import TasksList from './tasks-list'

export default function ListsBoard(){
    
    const [lists, setLists] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const ApiResponse = await fetch("http://localhost:5000/api/list")
            const json = await ApiResponse.json();
            setLists(json);
        }
        fetchData();
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