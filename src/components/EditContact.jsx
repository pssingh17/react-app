import React, { useState } from 'react'

export default function EditContact(props) {
    const [show, setShow] = useState(true);
    const [inpt, newinpt] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const inputevent = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // console.log(value)
        newinpt((prevvalue) => {
            return { ...prevvalue, [name]: value }
        })
    }
    
    return(
        <>
        
        <form className="row" key={props.id} onSubmit={(event)=>{
            event.preventDefault()
            if(!inpt.name || !inpt.email || !inpt.phone){
                alert("Fields canot be blank");
            }
            else{
            let id=props.id;
            console.log(id)
            const Record ={id,...inpt}
            console.log(Record)
            newinpt({
                name: "",
                email: "",
                phone: "",
            })
            // let id=data.id;
            console.log(id)
            props.handleClose();
            props.EditContact(Record)
            }
    }}>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
            <input type="text" name="name" className="form-control" id="FormControlInput1" placeholder={props.name} value={inpt.name} onChange={inputevent} />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Email</label>
            <input type="text" name="email" className="form-control" id="FormControlInput2" placeholder={props.email} value={inpt.email} onChange={inputevent} />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Phone</label>
            <input type="text" name="phone" className="form-control" id="FormControlInput3" placeholder={props.phone} value={inpt.phone} onChange={inputevent} />
        </div>
        <div className="col-12">
            <button className="btn btn-danger" type="submit" >Save changes</button>
        </div>

    </form>

    </>
    
    )

}