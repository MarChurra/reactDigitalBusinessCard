import React from "react"
import ReactDOM from "react-dom"
import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

function App() {
    return (
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

document.getElementById('emailBtn').addEventListener('click', function () {
    const emailAddress = 'mchurra@outlook.pt'
    const subject = 'Enter In Contact'
    const body = 'Content of your email'

    const mailToLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)

    window.location.href = mailToLink
})