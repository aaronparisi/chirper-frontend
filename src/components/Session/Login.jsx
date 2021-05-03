import React, { useState } from 'react'
import { routerActions } from 'react-router-redux'

const Login = props =>  {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    // ! this needs adjusting???
    // props.login(state)

    console.log('login form submitted!')
  }

  
  return (
    <div className="app-form login-form">
      <img className="form-title" src={loginText} alt="login"/>
      <form
        onSubmit={e => handleSubmit(e)}
      >
        <input
          type="email"
          value={email}
          id="email"
          placeholder="Email"
          onChange={e => setEmail(e.currentTarget.value)}
        />

        <input
          type="password"
          value={password}
          id="password"
          placeholder="password"
          onChange={e => setPassword(e.currentTarget.value)}
        />

        <input
          type="submit"
          value="Log In!"
        />
      </form>
    </div>
  )

}

export default Login