import ListPerson from './ListPerson'
import AddPerson from './AddPerson'
import React,{useState} from 'react'


export default function Person (){

    const [person,setPerson] = useState([
        {name:"Johnny",age:30},
        {name:"Amber",age:26},
        {name:"Depp",age:20}
    ])

    const addNewPerson =(name,age)=>{
        const onAddPerson ={name:name,age:age}
        setPerson([...person,onAddPerson])
    }
 

  
    return (
        <div>
            <AddPerson addPerson={addNewPerson} />
            <ListPerson newPerson={person}/>
        </div>

    )
}