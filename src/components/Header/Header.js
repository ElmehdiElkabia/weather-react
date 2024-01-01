import React from 'react'
import './Header.css'
export default function Header(props) {
    return (
        <header>
        <h1>weather</h1>
        <div className="search">
            <input type="text" placeholder="entre city" onChange={(e) => props.dataCity(e.target.value)} />
            <button className="bx bx-search" onClick={props.Search}></button>
        </div>
    </header>
    )
}
