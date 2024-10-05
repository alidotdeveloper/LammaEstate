import React from 'react'

function DropDown({name}) {
  return (
    <div>
    <label for="cars" className="">{name}</label><br/>
    <select id="cars" className="border border-solid black p-2 m-2">
        <option value="volvo">any</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
  
    </select>
  </div>
  )
}

export default DropDown