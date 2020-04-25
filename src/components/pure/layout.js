import React from "react"
import {Helmet} from "react-helmet";
import Footer from "./footer"

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/fontawesome.min.css"/>
    </Helmet>
    {children}
    <Footer/>
  </div>
)