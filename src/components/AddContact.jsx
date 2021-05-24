import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import Navbar from './Navbar';
import ShowContact from './ShowContact';
import axios from "axios";
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

import ShowAlert from './ShowAlert'



export default function AddContact() {
        const [inpt,newinpt] = useState({
            name:"",
            email : "",
            phone:""
        });
        const[message,setmessage] = useState()
        const [show, setShow] = useState(false);
        

        useEffect(() => {
            axios
                .get("/api/contactbook/")
                .then((res) => {
                    newinptRecords( res.data );
                    console.log(res)
                })
                .catch((err) => console.log(err));
        }, [])

        let initData =[];
        
        if(localStorage.getItem("data")=== null){
            initData = [];
        }
        else{
            initData = JSON.parse(localStorage.getItem("data"));
        }

        const [inptRecords,newinptRecords] = useState(initData);
        useEffect(() => {
            localStorage.setItem("data", JSON.stringify(inptRecords));
        }, [inptRecords])

        // console.log(inptRecords);
        const inputevent = (e)=>{
            let name= e.target.name;
            let value = e.target.value;
            newinpt((prevvalue)=>{
                return{...prevvalue, [name]:value}
            })
            // console.log(inpt)
        }



        
        const onSubmits =(e)=>{
            console.log("add clicked")
            e.preventDefault();
            if(!inpt.name || !inpt.email || !inpt.phone){
                alert("Fields canot be blank");
            }
            else{
            const newRecord ={...inpt}
            console.log(newRecord)
            // newinptRecords([...inptRecords, newRecord]);
            // localStorage.setItem("data",JSON.stringify(inptRecords));
            // console.log(inptRecords);
            axios
                .post("/api/contactbook/", newRecord)
                 .then((res) => {
                 axios
                .get("/api/contactbook/")
                .then((res) => newinptRecords( res.data ))
                .catch((err) => console.log(err));
                 }
                 );
            ;
            setShow(true);
            setTimeout(() => {
                setShow(false)
            }, 1500);
            setmessage("CONTACT ADDED")
            newinpt({
                name:"",
                email:"",
                phone : "",
            });
        }
        
        };


        const DelContact = (data)=>{
            console.log("del clicked");
            // newinptRecords(inptRecords.filter((e)=>{
            //     return e!==data;
            // }))
            axios
            .delete(`/api/contactbook/${data.id}/`)
                .then((res) => {
                   
                axios
                .get("/api/contactbook/")
                .then((res) => newinptRecords( res.data ))
                .catch((err) => console.log(err))
                
                }
                )
                setShow(true);
                setTimeout(() => {
                    setShow(false)
                }, 1500);
            setmessage("CONTACT DELETED")
            localStorage.setItem("data", JSON.stringify(inptRecords));
        }
        const EditContact = (data)=>{
            console.log("Edit clicked");
            console.log(data.id)
            
            axios
            .put(`/api/contactbook/${data.id}/`,data)
                .then((res) => {
                   
                axios
                .get("/api/contactbook/")
                .then((res) => newinptRecords( res.data ))
                .catch((err) => console.log(err))
                
                }
                )
                setShow(true);
                setTimeout(() => {
                    setShow(false)
                }, 1500);   
             setmessage("CONTACT EDITED")
            localStorage.setItem("data", JSON.stringify(inptRecords));
           
            
        }


    return (
        <>
        <Navbar />
        <div className="container">
        <Alert show={show} variant="success">
          <p>{message}</p>
          

          
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close
            </Button>
        
        </Alert>
  
       
        
        <Contact />
        <form className="row" onSubmit = {onSubmits}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" placeholder="Name" value={inpt.name}  onChange = {inputevent}/>
        </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Email</label>
                    <input type="text" name="email" className="form-control" placeholder="Email" value={inpt.email}  onChange = {inputevent}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Phone</label>
                    <input type="text" name="phone" className="form-control"  placeholder="Phone" value={inpt.phone}  onChange = {inputevent}/>
                </div>
                <div className="col-12">
                    <button className="btn btn-danger" type="submit" >Add Contact</button>
                </div>

        </form>
        <div className = "container fl">
            <ShowContact list={inptRecords} DelContact={DelContact} EditContact= {EditContact}/></div>
            </div>
            </>
    )
}
