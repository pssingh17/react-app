import { render } from '@testing-library/react'
import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


export default function Home() {
    const [state, setstate] = useState({
        name:'',
        password:''
    })
    let state1
    const handleFields = (e)=>{
        let name= e.target.name;
        let value = e.target.value;
            setstate((prevvalue)=>{
                return{...prevvalue, [name]:value}
            })
    }
    const handleLogin =(e)=>{
        e.preventDefault()
        state1 = JSON.stringify(state)
        localStorage.setItem(state1);
        
    }

    return (
        <>
        <Navbar />
            <form className="container my-5">
                <div class="mb-3">
                    
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" required  placeholder="Name" onChange={handleFields} value={state.name}/>
                    
                </div>
                <div class="mb-3">
                    
                    <input type="password" className="form-control" id="pass" placeholder="Password" required onChange={handleFields} value={state.password}/>
                </div>
                
                <button type="submit" onClick={handleLogin} className="btn btn-primary">Login</button>
            </form>


        </>
    )
}
