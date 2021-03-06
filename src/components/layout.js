/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from 'styled-components'
import Navbar from './globals/navbar/Navbar'
import Footer from '../components/globals/Footer'
// import "../sass/layout.scss"
// import './layout.css'

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
