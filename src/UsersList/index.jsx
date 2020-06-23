import React from "react"

import { useQuery } from "@apollo/react-hooks"
import { GET_USERS } from "../queries"

import "./index.css"

const UsersList = () => {
  const { loading: loadingUsers, error, data } = useQuery(GET_USERS)

  return (
    <div style={{ height: 500, overflowY: "scroll", flex: 7, marginRight: 20 }}>
      {loadingUsers && <h3>Fetching Users ...</h3>}
      {error && <h3>{JSON.stringify(error)}</h3>}
      {data && (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {data.Users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default UsersList
