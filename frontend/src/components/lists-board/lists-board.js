import React, { useEffect, useState } from 'react'
import './lists-board.css';
import TasksList from './tasks-list'
import AddListForm from './add-list-form'
import API from '../../helper/api';

export default function ListsBoard(){
    
    const [lists, setLists] = useState([]);

    useEffect(() => {
        //console.log(lists);
        API.lists.getListsOfBoard()
            .then(result => {
                setLists(result);  
            });
    }, [])
    
   
	const addList = list => {
        list.id = lists.length + 1
        API.lists.createList(list)
        .then(listRes => {
            setLists([ ...lists, listRes ])
        });
	}


    if(!lists) {
        return <div>Loading...</div>
    }

    return (
        <>  
            <h2>Board para GeeksHubs Academy</h2>
            <AddListForm addList={addList}/>
            <ul>
                {lists.map(list => <TasksList key={list.id} list={list} /> )}
            </ul>
        </>
    )
}