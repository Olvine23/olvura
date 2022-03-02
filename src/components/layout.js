import React from 'react'
import {Link, graphql, useStaticQuery } from 'gatsby'
import {Nav} from './Nav'
import {Content} from './content'

const Layout = ({pageTitle, children}) => {
  const data = useStaticQuery(graphql`

  query{
    allDirectory {
      edges {
        node {
          id
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
  
  
  `
    )
  return (
    <div> 
         <div>
      <title>OLVINE | {data.site.siteMetadata.title}</title>
      <Nav />
      
      
      <main>
        <h1 className='text-red-500 text-2xl'>{pageTitle}</h1>
        {children}
      </main>
    </div>
    </div>
  )
}

export default Layout