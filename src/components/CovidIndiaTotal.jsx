import React from 'react'

export default function CovidIndiaTotal(props) {
    return (
        <>
        <h4 className="card-text text-center my-3">LAST UPDATED : {props.state.lastupdatedtime}</h4>
        <div className="container fl card-modify text-center">
            <div className="card card-design country">
                <div className="card-body ">
                    <h3 className="card-title">Our Country India</h3>
                    <h3 className="card-subtitle my-2 text-">Total Cases</h3>
                    <h4 className="card-text my-3">{props.state.confirmed}</h4>
                    
                    
                </div>
            </div>
            <div className="card card-design active">
                <div className="card-body ">
                    <h3 className="card-title">Total</h3>
                    <h3 className="card-subtitle my-2 text-">Active</h3>
                    <h4 className="card-text my-3">{props.state.active}</h4>
                    
                </div>
            </div>
            <div className="card card-design recovered">
                <div className="card-body ">
                    <h3 className="card-title">Total</h3>
                    <h3 className="card-subtitle my-2 text-">Recovered</h3>
                    <h4 className="card-text my-3">{props.state.recovered}</h4>
                    
                </div>
            </div>
            <div className="card card-design deaths">
                <div className="card-body ">
                    <h3 className="card-title">Total</h3>
                    <h3 className="card-subtitle my-2 text-">Deaths</h3>
                    <h4 className="card-text my-3">{props.state.deaths}</h4>
                    
                </div>
            </div>
            
        </div>
        </>
    )
}
