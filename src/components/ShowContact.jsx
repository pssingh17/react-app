import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditContact from './EditContact';
// import EditContact from './EditContact'


export default function ShowContact(props) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    // let editData = createContext()
    let myStyle = {
        // width: "30%",
        margin: ".5rem",
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
    }
    const[editDetails,newEditDetails] = useState({
        id:0,
        editname:"",
        editemail:"",
        editphone:""
    })
    
    const [component,showComponent] = useState(false)
     const editButton=(data)=>{
        
         setShow(true);
         showComponent(true)
         newEditDetails({
             id:data.id,
             editname:data.name,
             editemail:data.email,
             editphone:data.phone
         })
        //  console.log(editDetails.id)
     }
   
    
        return(
        <>
        
            {props.list.map((data) => {
                
                return(
                    <React.Fragment key={data.id}>
                    <div className="card-key" >
                    <div className="card" style={myStyle} >
                    <div className="card-body">
                    {<h4 className="card-title">{data.name}</h4>} 
                        <hr></hr>
                    {<p className="card-title">Email :{data.email}</p>}
                        <hr></hr>
                    {<p className="card-text">Phone :{data.phone}</p>}
                        <hr></hr>
                        <button className="btn btn-danger mx-2" onClick={() => { props.DelContact(data) }}>Delete</button>
                        <button className="btn edit btn-danger mx-2" onClick={()=>{editButton(data)}} >Edit</button>                
                    </div>     
                </div>    
                </div>
               
                </React.Fragment>)                    
            })}
            <Modal show={show} onHide={handleClose}>
            {component?<EditContact editDetails={editDetails} handleClose={handleClose} EditContact={props.EditContact}/> :null}    
            </Modal>
                 
        </>)
    
    }
    

