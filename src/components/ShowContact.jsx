import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditContact from './EditContact'


export default function ShowContact(props) {
    // let editData = createContext()
    let myStyle = {
        width: "30%",
        margin: ".5rem",
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
    }
    
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    

    
    
   
    return (
        <>

            {props.list.map((data) => {
                return (
                    <>
                    <div className="card" style={myStyle} key={data.id}>
                    <div className="card-body">
                        <h4 className="card-title">{data.name}</h4>
                        <hr></hr>
                        <p className="card-title">Email :{data.email}</p>
                        <hr></hr>
                        <p className="card-text">Phone :{data.phone}</p>
                        <hr></hr>
                        <button className="btn btn-danger mx-2" onClick={() => { props.DelContact(data) }}>Delete</button>
                        <button className="btn btn-danger mx-2" onClick={handleShow}>Edit</button>
                        
                    </div>     
                </div>

                <Modal show={show} onHide={handleClose} >
                        <Modal.Body>
                            <EditContact list={props.list} id={data.id} EditContact= {props.EditContact} handleClose={handleClose}/>
                            <Button className="my-2" variant="danger" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Body>
                        
                    </Modal>


                </>
                )
            })}
           
        </>
    )
}
