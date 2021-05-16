import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [currwidth,newwidth] = useState("-100%");
    const openNav = ()=>{
        newwidth("0%");
    }
    const closeNav = ()=>{
        newwidth("-100%");
    }
    return (
        <div className="navbar " id="navbar">
        {/* <div className="name-logo nav-font">
            PRABHSIMRAN SINGH
        </div> */}
        <ul className="nav-list" style={{left:currwidth}} id="nav-list">
            
                <li className="nav-items"><Link to="/">CONTACT BOOK</Link></li>
                <li className="nav-items "><Link to="/todo">TODO</Link></li>
                <li className="nav-items "><Link to="/covid">COVID TRACKER</Link></li>
                
                <div className="btn closeBtn"  onClick={closeNav}><ion-icon name="close-outline"size="large" id="close"></ion-icon></div>
        </ul>
        <div className="btn menuBtn menu-icon" onClick={openNav}><ion-icon  id="menu" name="menu-outline" size="large"></ion-icon></div>
            
    
        
    </div>
    )
}
