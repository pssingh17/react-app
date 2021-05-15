import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import Navbar from './Navbar';
import ShowContact from './ShowContact';

export default function AddContact() {
        const [inpt,newinpt] = useState({
            name:"",
            email : "",
            phone:""
        });
    


        let initData;
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

        
        const inputevent = (e)=>{
            let name= e.target.name;
            let value = e.target.value;
            newinpt((prevvalue)=>{
                return{...prevvalue, [name]:value}
            })
        }

        const onSubmits =(e)=>{
            console.log("add clicked")
            e.preventDefault();
            if(!inpt.name || !inpt.email || !inpt.phone){
                alert("Fields canot be blank");
            }
            else{
            const newRecord ={...inpt,id:new Date().getTime().toString()}
            newinptRecords([...inptRecords, newRecord]);
            localStorage.setItem("data",JSON.stringify(inptRecords));
            console.log(inptRecords);
            newinpt({
                name:"",
                email:"",
                phone : "",
            });
        }
        };
        const DelContact = (data)=>{
            console.log("del clicked");
            newinptRecords(inptRecords.filter((e)=>{
                return e!==data;
            }))
            localStorage.setItem("data", JSON.stringify(inptRecords));
        }


    return (
        <>
        <Navbar />
        <div className="container">
        <Contact />
        <form className="row" onSubmit = {onSubmits}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Name" value={inpt.name}  onChange = {inputevent}/>
        </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Email</label>
                    <input type="text" name="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" value={inpt.email}  onChange = {inputevent}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Phone</label>
                    <input type="text" name="phone" className="form-control" id="exampleFormControlInput1" placeholder="Phone" value={inpt.phone}  onChange = {inputevent}/>
                </div>
                <div className="col-12">
                    <button className="btn btn-danger" type="submit" >Add Note</button>
                </div>

        </form>
        <div className = "container fl">
            <ShowContact list={inptRecords} DelContact={DelContact}/></div>
            </div>
            </>
    )
}
