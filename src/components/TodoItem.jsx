import React from 'react'

export default function TodoItem(props) {
    const mystyle = {
        width: "100%",
    }

    

    return (
        
            <div className="container text-center my-3">
         <div className="card " style={mystyle}>
            {props.todo.map((data,id)=>{
                return(<div key={id} className ="fl list-group-item"><div className="wid mx-3">{data}</div>
                <div onClick = {()=>{props.DelTodo(data)}}> <ion-icon size="large" name="close-circle-outline"></ion-icon></div>
            </div>)
            })}
            
            
                
    
            </div>

         </div>
    
    )
}
