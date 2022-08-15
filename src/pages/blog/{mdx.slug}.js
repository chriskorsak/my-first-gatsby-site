import React from 'react';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout>
      <h2>{data.mdx.frontmatter.name}</h2>
      <p>{data.mdx.frontmatter.datePublished}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{' '}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        name
        datePublished(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_text
        hero_image_credit_link
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      id
    }
  }
`;

export default BlogPost;
