import React from "react"

function App(){

    return(
        <div className="container">
            <div className="title">Life Coach Profile</div>
            <form>
                <div className="user-details">
                    <div className="input-box">
                        <span className="detailes">Name</span>
                        <input type="text" placeholder="Enter your name" required/>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default App