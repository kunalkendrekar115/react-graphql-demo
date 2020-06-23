import gql from "graphql-tag"

export const GET_USERS = gql`
  {
    Users {
      id
      name
      email
      company {
        name
      }
    }
  }
`

export const GET_COMPANIES = gql`
  {
    Companies {
      id
      name
    }
  }
`

export const ADD_USER = gql`
  mutation AddUser($name: String, $email: String, $companyId: Int) {
    addUser(name: $name, email: $email, companyId: $companyId)
  }
`
