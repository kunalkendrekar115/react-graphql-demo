import React, { useState } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { GET_COMPANIES, ADD_USER, GET_USERS } from "../queries"

import "./index.css"

const NewUser = () => {
  const { loading, error, data } = useQuery(GET_COMPANIES)
  const [user, setUser] = useState({ name: "", email: "", companyId: 0 })

  const resetForm = () => {
    setUser({ name: "", email: "", companyId: 0 })
  }

  const [addUser, { loading: loadingAddUser }] = useMutation(ADD_USER, {
    refetchQueries: [{ query: GET_USERS }],
    onCompleted: () => {
      resetForm()
    }
  })

  const onSubmit = (event) => {
    event.preventDefault()
    if (!user.email || !user.name || user.companyId === 0) {
      alert("Please enter all details")
      return
    }
    addUser({
      variables: { ...user }
    })
  }

  const handleChange = ({ target: { value, name } }) => {
    setUser((prev) => ({ ...prev, [name]: value }))
  }
  return (
    <>
      {loading && <h3>Fetching Companies ...</h3>}

      {error && <h3>Fetch Error</h3>}
      {data && (
        <>
          <div class="root">
            <h3>Add User</h3>
            <form style={{ width: "100%" }} onSubmit={onSubmit}>
              <div class="row">
                <label>Name</label>
                <input
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <div class="row">
                <label>Email</label>
                <input
                  name="email"
                  value={user.email}
                  type="text"
                  onChange={handleChange}
                />
              </div>

              <div class="row">
                <label>Company</label>
                <select
                  name="companyId"
                  id="cars"
                  defaultValue={user.companyId}
                  onChange={({ target: { name, value } }) =>
                    handleChange({ target: { name, value: parseInt(value) } })
                  }
                >
                  <option value={0} disabled>
                    {"Select Company"}
                  </option>
                  {data.Companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
                </select>
              </div>

              <div class="submit">
                <button type="reset" onClick={resetForm}>
                  Reset
                </button>
                <button disabled={loadingAddUser} type="submit">
                  {loadingAddUser ? "Adding User" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default NewUser
