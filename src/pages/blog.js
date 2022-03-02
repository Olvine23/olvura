import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({data}) => {
  return (
     <>
     <Layout pageTitle="My Blogs" />
     {data.allMdx.nodes.map(
         node => (
             <article key ={node.id}>

                <h2 className="2xl"> {node.frontmatter.title} </h2>
                <p>{node.frontmatter.date}</p>
                <MDXRenderer>
                    {node.body}
                </MDXRenderer>

             </article>
         )
     )}
     
     </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
  `

export default BlogPage