import React, { useState } from 'react'

function Form() {
    const [name,setname]=useState("")
 function handlechange (event) {
    console.log(event.target.value);
    setname(event.target.value)
 }
 function submit(event){
    console.log("submit");
 }

  return (
    <>
    <div className='head'>
        <h1>jkk{name}</h1>
        <input onChange={handlechange} value={name} style={{width:"500px",textAlign:'center',fontSize:'50px'}} type="text" placeholder='enter ur name'>
         </input>
        <button onClick={submit}>submit</button>

    </div>
    </>
  )
}

export default Form