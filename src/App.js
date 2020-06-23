import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"

import Users from "./Users"

import "./index.css"

const client = new ApolloClient({
  uri: "https://7xsco.sse.codesandbox.io/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Users />
      </div>
    </ApolloProvider>
  )
}

export default App
