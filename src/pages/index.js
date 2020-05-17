import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Image from 'gatsby-image';
import Layout from '../components/Layout';
// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Projects from '../components/Projects';
import About from '../components/About'
import config from '../../config';
import QueryTest from './queryTest';

const IndexPage = (props) => {

  return (
    <Layout>
      <Sidebar />
      <div className="container-fluid p-0">
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="about"
        >
          <div className="w-100">
            <h1 className="mb-0">
              {config.firstName}
              <span className="text-primary">{config.lastName}</span>
            </h1>
            <p className="lead mb-5">Software Engineer</p>
            <div className="social-icons">
              {config.socialLinks.map(social => {
                const { icon, url } = social;
                return (
                  <a key={url} href={url}>
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

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="skills"
        >
          <div className="w-100">
            <h2 className="mb-5">Skills</h2>

            <div className="subheading mb-3">
              Programming Languages &amp; Tools
            </div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-angular"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-react"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-sass"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-less"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-wordpress"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-gulp"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-grunt"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-npm"></i>
              </li>
            </ul>

            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-check"></i>
                Mobile-First, Responsive Design
              </li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Cross Browser Testing &amp; Debugging
              </li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Cross Functional Teams
              </li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Agile Development &amp; Scrum
              </li>
            </ul>
          </div>
        </section>

        <hr className="m-0" />

        <About />
      </div>
    </Layout>
  );
};


export default IndexPage;
