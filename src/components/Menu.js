import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <div
    style={{
      background: `#ccc`,
      paddingTop: `15px`,
    }}
  >
    <ul
      style={{
        listStyle: `none`,
        display: `flex`,
        justifyContent: `space-evenly`,
      }}
    >
      <li>
        {""}
        <Link to="/">Home</Link>
      </li>
      <li>
        {""}
        <Link to="page-2">About</Link>
      </li>
      <li>
        {""}
        <Link to="/services">Services</Link>
      </li>
    </ul>
  </div>
)

export default Menu
