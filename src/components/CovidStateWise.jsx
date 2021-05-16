import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';


export default function CovidStateWise() {
    const [data,setData]=useState([]);
    // console.log(data)
    const getData = async()=>{
        const response = await fetch('https://api.covid19india.org/data.json');
        // console.log(response)
        let resData = await response.json();
        // console.log(resData.statewise);
        setData(resData.statewise);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <>
        <Navbar />
            <div className = "container">
            <h1 className="text-center mt-3">STATE WISE CASES</h1>

                <table className="table table-striped ">
                <thead className="thead-dark">
                        <tr>
                            <th scope="col">State</th>
                            <th scope="col">Confirmed</th>
                            <th scope="col">Active</th>
                            <th scope="col">Recovered</th>
                            <th scope="col">Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                         data && data.length > 0 && data.map((item, index) =>
                        <>
                        <tr key={index}>
                                <td >{item.state}</td>
                                <td >{item.confirmed}</td>
                                <td >{item.active}</td>
                                <td >{item.recovered}</td>
                                <td >{item.deaths}</td>
                        </tr>
                        </>)
                } 
                           
                       
                    </tbody>
                </table>
                </div>

                
                
            



        </>
    )
}
