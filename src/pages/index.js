import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/Layout';
// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';

const IndexPage = () => {
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

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="projects"
        >
          <div className="w-100">
            <h2 className="mb-5">Projects</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">University of Colorado Boulder</h3>
                <div className="subheading mb-3">Bachelor of Science</div>
                <div>Computer Science - Web Development Track</div>
                <p>GPA: 3.23</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">August 2006 - May 2010</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
              <div className="resume-content">
                <h3 className="mb-0">James Buchanan High School</h3>
                <div className="subheading mb-3">Technology Magnet Program</div>
                <p>GPA: 3.56</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">August 2002 - May 2006</span>
              </div>
            </div>
          </div>
        </section>

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

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="interests"
        >
          <div className="w-100">
            <h2 className="mb-5">Interests</h2>
            <p>
              Apart from being a web developer, I enjoy most of my time being
              outdoors. In the winter, I am an avid skier and novice ice
              climber. During the warmer months here in Colorado, I enjoy
              mountain biking, free climbing, and kayaking.
            </p>
            <p className="mb-0">
              When forced indoors, I follow a number of sci-fi and fantasy genre
              movies and television shows, I am an aspiring chef, and I spend a
              large amount of my free time exploring the latest technology
              advancements in the front-end web development world.
            </p>
            <Image
              fluid={project.image.fluid}
              alt={project.title}
              style={{ height: '30vh' }}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

