import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';

const BlogPage = ({ data }) => {
  console.log(data.allMdx.nodes);
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map(node => (
        <article key={node.frontmatter.id}>
          <h2>{node.frontmatter.name}</h2>
          <p>{node.frontmatter.datePublished}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___datePublished }) {
      nodes {
        id
        frontmatter {
          author
          datePublished(formatString: "MMMM D, YYYY")
          name
        }
        body
      }
    }
  }
`;

export default BlogPage;
