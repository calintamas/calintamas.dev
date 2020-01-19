import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Timestamp from '../components/timestamp';

const BlogIndex = (props) => {
  const { data, location } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='All posts' />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  margin: '12px 0'
                }}>
                <h3
                  style={{
                    marginBottom: 0,
                    marginRight: '10px'
                  }}>
                  <Link
                    style={{ textDecoration: 'none', boxShadow: `none` }}
                    to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <Timestamp date={node.frontmatter.date} />
              </div>
            </header>
          </article>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

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
            date(formatString: "MMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
