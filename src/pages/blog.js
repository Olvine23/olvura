import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({data}) => {
  return (
     <>
     <Layout pageTitle="My Blogs" />
     {data.allFile.nodes.map(
         node => (
             <li key ={node.name}>

                 {node.name}

             </li>
         )
     )}
     
     </>
  )
}

export const query = graphql`
    query MyQuery {
        allFile {
        nodes {
            name
        }
        }
    }
    

    `

export default BlogPage