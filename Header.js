import React from "react"

function Header({setIsAdding}){
    return (
        <header>
            <h1>Employee Data</h1>
            <div>
                <button onClick={() => setIsAdding(true)} 
                className="round-button" >Add New Employee</button>
            </div>
        </header>
    );
}

export default Header;