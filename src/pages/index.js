import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <div style={{ display: 'flex', flexDirection: 'column', margin: '12px 0' }}>
                  <h3
                    style={{
                      marginBottom: 0,
                      display: 'inline',
                      marginRight: '10px'
                    }}
                  >
                    <Link style={{ textDecoration: 'none', boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <time
                    style={{ fontSize: 12.8 }}
                    dateTime={node.frontmatter.date}>{node.frontmatter.date}
                  </time>
                </div>
              </header>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
