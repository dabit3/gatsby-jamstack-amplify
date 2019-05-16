import React, { useState, useEffect } from 'react'
import { Router, Link } from "@reach/router";

import { withAuthenticator } from 'aws-amplify-react'
import { Auth } from 'aws-amplify'

const Profile = () => (
  <div>
    <h1>Hello from Profile</h1>
  </div>
)

const UserInfo = () => {
  const [user, setuser] = useState({})
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        setuser(user.signInUserSession.idToken.payload)
      })
      .catch(err => console.log({ err }))
  }, [])

  return (
    <div>
      <h1>Hello from UserInfo</h1>
      <h2>email: {user.email}</h2>
      <h4>phone number: {user.phone_number}</h4>
    </div>
  )
}

const Routes = () => {
  return (
    <div>
      <Link style={styles.link} to="/profile">Profile</Link>
      <Link style={styles.link} to="/profile/info">User Info</Link>
      <Link style={styles.link} to="/">Home</Link>
      <Router>
        <Profile path="/profile" />
        <UserInfo path="/profile/info" />
      </Router>
    </div>
  )
}

export default withAuthenticator(Routes, {
  includeGreetings: true
})

const styles = {
  link: {
    marginRight: 14
  }
}