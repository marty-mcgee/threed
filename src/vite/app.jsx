import React, { useState, useEffect } from "react"
import { Router, Link } from "wouter"

// ==============================================================
/**
* This code defines the react app
*
* Imports the router functionality to provide page navigation
* Defines the Home function outlining the content on each page
* Content specific to each page (Home and About) is defined in their components in /pages
* Each page content is presented inside the overall structure defined here
* The router attaches the page components to their paths
*/

// Import and apply CSS stylesheet
import "src/styles/styles.css"

// Where all of our pages come from
import PageRouter from "src/components/router/router.jsx"

// The component that adds our meta tags to the page
import Seo from 'src/components/seo/seo.jsx'

// ==============================================================
// GRAPHQL -- APOLLO (SERVER, NOT CLIENT)
// const doBootApollo = true

// if (doBootApollo) {
//   const { ApolloServer } = require('apollo-server')
//   const gql = require('graphql-tag')

//   const typeDefs = gql`
//     type Query {
//       word:  String
//     }
//   `

//   const resolvers = {
//     Query: {
//       word: () => "HEY HEY HEY"
//     }
//   }

//   const schema = new ApolloServer({ typeDefs, resolvers })

//   schema.listen({ port: process.env.PORT }).then(({ url }) => {
//     console.debug(`schema ready at ${url}`)
//   })
// }

// ==============================================================
// REACT APP
// Home function that is reflected across the site
export default function Home() {
  return (
    <Router>
      <Seo />
      <main role="main" className="wrapper">
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <PageRouter />
        </div>
      </main>
      {/* Footer links to Home and About, Link elements matched in router.jsx */}
      <footer className="footer">
        <div className="links">
          <Link href="/">Home</Link>
          <span className="divider">|</span>
          <Link href="/about">About</Link>
        </div>
        <a
          className="btn--remix"
          target="_top"
          href="https://glitch.com/edit/#!/remix/glitch-hello-react"
        >
          <img src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140" alt="" />
          Remix on Glitch
        </a>
      </footer>
    </Router>
  )
}
