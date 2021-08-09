import React from 'react'
import './HomePage.css'
import ethereum from './ethereum.png'
export default function HomePage() {
    return (
        <div className="Home">
            <div className="content">
                <img src={ethereum} style={{width:"15%"}}></img>
            <h1>Let's Secure Patients Data in Decentralized way </h1>
            
            <button id="btn">  Enter </button>
            </div>
        </div>
    )
}
