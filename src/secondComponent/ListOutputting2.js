import React from 'react'

function ListOutputting2() {
    const person = [
        {
            id: 1,
            name: 'kusum',
            skill: 'node',
        },
        {
            id: 2,
            name: 'Shraddha',
            skill: 'react js',
        },
        {
            id: 3,
            name: 'Siddhi',
            skill: 'react Native',
        }
    ]   
    //give unique key to each item of array else it will show error in console
    //key props not accesible in child component
    const personList = person.map(person => <li key={person.id}>I am {person.name}. I know {person.skill}</li>)
    return (
        <div>
            {personList}
        </div>
    )
}

export default ListOutputting2
