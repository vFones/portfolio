import React from "react"
import { Link } from "gatsby"
import Header from "../components/pure/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="Uh oh!" />
    <p>Maybe are you lost?</p>
    <p>Go <Link to="/">127.0.0.1</Link></p>
  </div>
)