import React from 'react';

type Project = {
  title: string;
  description: string;
};

type ProjectListProps = {
  projects: Project[];
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => (
  <section>
    <h2>Projets</h2>
    <ul>
      {projects.map((proj, index) => (
        <li key={index}>
          <strong>{proj.title} :</strong> {proj.description}
        </li>
      ))}
    </ul>
  </section>
);

export default ProjectList;
