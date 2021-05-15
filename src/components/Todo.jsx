import React from 'react'
import AddTodo from './AddTodo'
import Navbar from './Navbar'
// import TodoItem from './TodoItem'

export default function Todo() {
    
    return (
        <>
        <Navbar />
        <div className = "container text-center">
        <h4 className="my-3">Todo List</h4>
        <AddTodo />
        </div>
        
        </>
    )
}
