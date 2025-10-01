import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';
import SectionTalks from '../components/section-talks';
import SectionNotes from '../components/section-notes';
import Seo from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const research = get(data, 'site.siteMetadata.research', false);
  const talks = get(data, 'site.siteMetadata.talks', false);
  const notes = get(data, 'site.siteMetadata.notes', false);
  const posts = data.allMarkdownRemark.edges;
  const noBlog = !posts || !posts.length;

  return (
    <Layout>
      <Seo />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {(about || research) && <SectionAbout about={about} research={research} />}
      {talks && talks.length && <SectionTalks talks={talks} />}
      {notes && notes.length && <SectionNotes notes={notes} />}
      {!noBlog && <SectionBlog posts={posts} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        research
        author
        github
        linkedin
        cv
        notes {
          name
          description
          link
        }
        talks {
          name
          description
          link
        }
        experience {
          name
          description
          link
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
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
`;
