import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <Link to="/" className="navbar-brand mb-0 h1">PhoneBook</Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item ml-3">
                    <Link to="/new" style={{textDecoration: "none"}}>New Contact</Link>
                </li>
            </ul>
        </nav>
    )
}