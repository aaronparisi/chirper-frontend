import React, { useState } from 'react'
import { history } from '../..'

const Signup = props => {

  const [email, setEmail] = useState("parisi.aaron@gmail.com")
  const [password, setPassword] = useState("password")
  const [passwordConfirm, setPasswordConfirm] = useState("password")

  const handleSubmit = (e) => {
    e.preventDefault()

    // this.props.createNewUser(this.state)
    // .then(() => history.push('/listings'))

    console.log('signup form submitted!')
  }

  
  return (
    <div className="app-form signup-form">
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
          type="password"
          value={passwordConfirm}
          id="password-confirmation"
          placeholder="Confirm Password"
          onChange={e => setPasswordConfirm(e.currentTarget.value)}
        />

        <input
          type="submit"
          value="Sign Up!"
        />
      </form>
    </div>
  )

}

export default Signup