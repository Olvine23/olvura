import { graphql } from 'gatsby'
import './post.css'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../../components/layout'
const BlogPost = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout>
      <div className="text-center p-6 w-100  mx-auto"> 
      <h1 class= "text-3xl font-bold">{data.mdx.frontmatter.title}</h1>
      <p class="text-center" >{data.mdx.frontmatter.date}</p>
      <GatsbyImage
      className="h-80 mb-10"
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
    />
    <p class="text-center" >Article by <span class="font-bold"> {data.mdx.frontmatter.author} </span></p>
      <div  class="leading-8 post w-100  b-red-500">
      <MDXRenderer  >
        {data.mdx.body}
      </MDXRenderer>
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default BlogPost;