import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';

export default function AddTodo() {
    const [inpt, setinpt] = useState("");
    

    let initTodo;
        if(localStorage.getItem("todo")=== null){
            initTodo = [];
        }
        else{
            initTodo = JSON.parse(localStorage.getItem("todo"));
        }

        const [todo,setTodo] = useState(initTodo);
        useEffect(() => {
            localStorage.setItem("todo", JSON.stringify(todo));
        }, [todo])

    const inputHandle = (e)=>{
        // console.log(e.target.value);
        setinpt(e.target.value);
    }

    const submitTodo = (e)=>{
        e.preventDefault();
        console.log("submit clicked");
        setTodo((prevvalue)=>{
            return[...prevvalue, inpt]
        })
        localStorage.setItem("todo",JSON.stringify(todo));
        setinpt("");
        
    }

    const DelTodo = (data)=>{
        console.log("DEL TODO CLICKED");
        return(
            setTodo(todo.filter((e)=>{
                return e!==data;
            }))
        )
        
        
    }



    return (
        <>
             <form onSubmit={submitTodo} className="row g-3 my-2">
            <input type="text" className="form-control" id="inputEmail4" placeholder = "Type Here" value={inpt} onChange = {inputHandle}/>
                        
                <div className="col-12 text-start">
                    <button type="submit" className="btn btn-danger">Add Note</button>
                </div>
            </form>
            <TodoItem todo={todo} DelTodo={DelTodo}/>
        </>
    )
}
