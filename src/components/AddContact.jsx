import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import Navbar from './Navbar';
import ShowContact from './ShowContact';
import axios from "axios";
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import AddForm from './AddForm'
import Home from './Home';
import { Redirect } from 'react-router';




export default function AddContact() {
        const [inpt,newinpt] = useState({
            name:"",
            email : "",
            phone:""
        });
        const [loginval,setloginval] =useState(true)
        let tokens = JSON.parse(localStorage.getItem('tokens'))
        
        let tok
        if (tokens!==null){
        
        tok = tokens.accesstoken
        }
        const[message,setmessage] = useState()
        const [show, setShow] = useState(false);
        

        useEffect(() => {
            if (tokens!==null){
            const config = {
                headers: { Authorization: `Bearer ${tok}` }
            };
            // console.log("ACCESS "+tok)
            axios
                .get("/api/contactbook/",config
                )
                .then((res) => {
                    newinptRecords( res.data );
                    console.log(res)
                })
                .catch((err) => console.log(err));
        }}, [])

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
            const config = {
                headers: { Authorization: `Bearer ${tok}` }
            };
            // newinptRecords([...inptRecords, newRecord]);
            // localStorage.setItem("data",JSON.stringify(inptRecords));
            // console.log(inptRecords);
            axios
                .post("/api/contactbook/", newRecord,config)
                 .then((res) => {
                 axios
                .get("/api/contactbook/",config)
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
            console.warn(data.id)
            console.log("del clicked"+tok);
            // newinptRecords(inptRecords.filter((e)=>{
            //     return e!==data;
            // }))
            const config = {
                headers: { Authorization: `Bearer ${tok}` }
            };
            axios
            .delete(`/api/contactbook/${data.id}/`,config)
                .then((res) => {
                   
                axios
                .get("/api/contactbook/",config)
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
            // console.warn(data.id)
            const config = {
                headers: { Authorization: `Bearer ${tok}` }
            };
            // console.log(data.id)
            
            axios
            .put(`/api/contactbook/${data.id}/`,data,config)
                .then((res) => {
                   
                axios
                .get("/api/contactbook/",config)
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

        const logout =()=>{
            localStorage.clear()
            setloginval(false)
        
        }
    return (
        <>
        {loginval ? 
        (<>
        <Navbar />
        <div className="container">
        <Alert show={show} variant="success">
          <p>{message}</p>
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close
            </Button>
        
        </Alert>
  
       <button type="button" className='btn btn-primary' onClick={logout}>Logout</button>
        <Contact />
        <AddForm onSubmits={onSubmits} inputevent={inputevent} inpt={inpt} />
        <div className = "container fl">
            <ShowContact list={inptRecords} DelContact={DelContact} EditContact= {EditContact}/></div>
        </div>
        </>) :
        (
            <Redirect to = {{ pathname: "/" }} />
            )}
        

        </>
    )
}
