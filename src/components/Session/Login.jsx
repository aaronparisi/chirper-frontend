import React, { useState } from 'react'

const Login = props =>  {

  const [email, setEmail] = useState("parisi.aaron@gmail.com")
  const [password, setPassword] = useState("password")

  const handleSubmit = e => {
    e.preventDefault()

    // ! this needs adjusting???
    // props.login(state)

    console.log('login form submitted!')
  }

  
  return (
    <div className="app-form login-form">
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
          placeholder="Password"
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