import React from "react"

export default function ListPerson ({newPerson}){

    return (
        <div className="item">
            <ul>
                {newPerson.map(item=>(
                    <li className="itemInfo">
                       <div>
                           Name: {item.name}
                       </div> 
                       <div>
                            Age: {item.age}
                        </div> 
                    </li>
                    ))}
            </ul>
        </div>

    )
}