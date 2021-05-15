import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CovidIndiaTotal from './CovidIndiaTotal';
import Navbar from './Navbar';


export default function Covid() {
    const [state, setstate] = useState("");
    const [data,setData]=useState([]);
    console.log(data)
    const getData = async()=>{
        const response = await fetch('https://api.covid19india.org/data.json');
        // console.log(response)
        let resData = await response.json();
        // console.log(resData.statewise);
        setstate(resData.statewise[0]);
        setData(resData.statewise);
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
        <div className="covid-bg">
        <Navbar />
        <h2 className="text-center pt-2 ">Live Covid TRACKER</h2>
        <CovidIndiaTotal state = {state}/>
        <h2 className="text-center" ><Link to="/covidstatewise" style ={{color:"blue"}}>COVID State Wise</Link></h2>
        </div>
        
        </>
    )
}
