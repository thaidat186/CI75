import React,{useState} from 'react'

export default function AddPerson ({addPerson}){
    const[newPerson,setNewPerson] = useState("")
    const[newAge,setNewAge] = useState(0)
   


    const nameChange=(event)=>{
        
        setNewPerson(event.target.value)
        
    }
    
    const ageChange = (event) =>{
        
        setNewAge(event.target.value)
        
    }

    const handleClick = () =>{
        
        addPerson(newPerson,newAge)
        console.log(addPerson)
        

    }

    return (
        <div>
            <label>Name</label>
            <input type="text" onChange={(event)=>nameChange(event)}></input>
            <label>Age</label>
            <input type="number" onChange={(event)=>ageChange(event)}></input>
            <button onClick={handleClick}>Add</button>
        </div>

    )
}