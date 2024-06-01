import React from 'react'

export default function Header() {
    return (

        <header>
            <img src="./Images/profilePic.jpg" className="header--img" />
            <div className="container">
                <h1 className= "developer---name">Marco Churra</h1>
                <h2 className="title">Frontend Developer</h2>
                <button> <img className = "icon--email" src= "./Images/email.png" />Email</button>
            </div>
        </header>
    )
}