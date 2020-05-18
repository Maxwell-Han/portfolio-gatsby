import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Projects from '../components/Projects';
import About from '../components/About';
import config from '../../config';
import QueryTest from './queryTest';
import PulseText from 'react-pulse-text';

const IndexPage = props => {
  const {
    allContentfulAsset: { nodes },
  } = useStaticQuery(query);
  console.log('query result is ', nodes);
  return (
    <Layout>
      <Sidebar />
      <div className="container-fluid p-0">
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="welcome"
        >
          <div className="w-100">
            <h1 className="mb-0">
              {config.firstName}
              <PulseText
                text="Han"
                duration={4150}
                iterationCount={99999}
                reverse
              >
                <span className="text-with-cursor">Han</span>
              </PulseText>
            </h1>

            <p className="lead mb-5">Software Engineer</p>
            <div className="social-icons">
              {config.socialLinks.map(social => {
                const { icon, url } = social;
                return (
                  <a key={url} href={url} target="_blank" rel="noreferrer">
                    <i className={`fab ${icon}`}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <Projects />

        <hr className="m-0" />

        <About />
      </div>
      <footer id="footer" class="wrapper style1-alt">
        <ul>Made with GatsbyJS  &copy; 2020 Max Han. All rights reserved.</ul>
      </footer>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulAsset(filter: { title: { eq: "My Resume" } }) {
      nodes {
        title
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`;

export default IndexPage;
