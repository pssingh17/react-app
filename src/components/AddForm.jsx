import React from 'react'

export default function AddForm(props) {
    return (
        <>
             <form className="row" onSubmit = {props.onSubmits}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" placeholder="Name" value={props.inpt.name}  onChange = {props.inputevent}/>
        </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Email</label>
                    <input type="text" name="email" className="form-control" placeholder="Email" value={props.inpt.email}  onChange = {props.inputevent}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Phone</label>
                    <input type="text" name="phone" className="form-control"  placeholder="Phone" value={props.inpt.phone}  onChange = {props.inputevent}/>
                </div>
                <div className="col-12">
                    <button className="btn btn-danger" type="submit" >Add Contact</button>
                </div>

        </form>
        </>
    )
}
