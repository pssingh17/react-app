import React from 'react'

export default function ShowContact(props) {
    let myStyle = {
        width: "30%",
        margin:".5rem",
        marginTop:"1.5rem",
        marginBottom:"1.5rem",
    }
    

    return (
        <>
    
            {props.list.map((data)=>{
                return(<div className="card" style={myStyle} key={data.id}>
                        <div className="card-body">
                            <h4 className="card-title">{data.name}</h4>
                            <hr></hr>
                            <p className="card-title">Email :{data.email}</p>
                            <hr></hr>
                            <p className="card-text">Phone :{data.phone}</p>
                            <hr></hr>
                            <button  className="btn btn-danger" onClick= {()=>{props.DelContact(data)}}>Delete</button>
                        </div>
                </div>)
            })}
            
    </>
    )
}
