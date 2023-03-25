import React from 'react'
import selva from "../New folder/737400.jpg"

import './login.css'

function Index() {
  return (
    <>
    <img id='imag12' src={selva} alt="gh"/>
  <form class="container12">
<form class="card12">
  <input id="name12" type="email" placeholder='username' required='plese fill this'></input>
  <input id="name12" type="password" placeholder='password'></input>
  <a href="#" >forgot password?</a>
  <button id="btn12">login</button>
<p id="terms12">by creating an account i accept the term and condition & privacy police</p>
</form>
</form>
</>
  )
}
export default Index