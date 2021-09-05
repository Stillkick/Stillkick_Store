import React from 'react'
import ComputerList from '../Json/ComputerList.json'
import {Link} from 'react-router-dom'

function Computers() {
    return (
        <div className="gadget-list">
            {ComputerList.map((comp) => {
                return(
                    <Link to={"device/" + comp.id} className="gadget-item" >
                        <h1>{comp.title}</h1>
                        <img src={comp.poster} alt="" />
                        <h3>{comp.price}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default Computers
