import React from "react"

import UsersList from "../UsersList"
import NewUser from "../NewUser"

import "./index.css"

const Users = () => {
  return (
    <div className="users-root">
      <h2>GraphQL Demo</h2>

      <div className="users-container">
        <NewUser />
        <UsersList />
      </div>
    </div>
  )
}

export default Users
