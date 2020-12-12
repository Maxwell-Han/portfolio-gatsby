import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Projects = () => {
  const [imageHover, setIsShown] = useState({});
  const {
    allContentfulProjects: { nodes: projects },
  } = useStaticQuery(query);
  // console.log('projects are ', projects);

  const updateView = e => {
    setIsShown({
      ...imageHover,
      [e.currentTarget.id]: true,
    });
  };
  const revertView = e => {
    setIsShown({
      ...imageHover,
      [e.currentTarget.id]: false,
    });
  };

  return (
    <div>
      <h2 className="mb-5 text-center">Projects</h2>
      <section className="projects-section" id="projects">
        {projects.map((proj, i) => {
          return (
            <section className="project" key={proj.title}>
              <a href={proj.deployment} className="proj-title-link">
                <h3>{proj.title}</h3>
              </a>
              <a
                href={proj.deployment}
                id={proj.title}
                className="screenshot"
                onMouseEnter={updateView}
                onMouseLeave={revertView}
              >
                <Image
                  fluid={
                    imageHover[proj.title]
                      ? proj.gif.fluid
                      : proj.screenshot.fluid
                  }
                  className="screenshot"
                  id={proj.title}
                  loading={'eager'}
                />
              </a>
              <p>{proj.info.info}</p>
              <p>
                <i class="fas fa-layer-group"></i>&ensp;{proj.tech.tech}
              </p>
              <a href={proj.github}>
                <p>
                  <i class="fab fa-github-square"></i>&ensp;View code
                </p>
              </a>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export const query = graphql`
  {
    allContentfulProjects(sort: {fields: priority, order: ASC}) {
      nodes {
        id
        title
        tech {
          tech
        }
        screenshot {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        github
        deployment
        info {
          info
        }
        gif {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`;
export default Projects;

{
  /* <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
<div>
  <h3 className="mb-0">{proj.title}</h3>
  <div className="subheading mb-3">{proj.info.info}</div>
</div>
<div className="resume-date text-md-right">
  <Image fluid={proj.gif.fluid} />
</div>
</div> */
}
