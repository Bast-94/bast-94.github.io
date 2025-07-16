import React from 'react';

type ExperienceProps = {
  title: string;
  company: string;
  date: string;
  location: string;
  tasks: string[];
};

const Experience: React.FC<ExperienceProps> = ({ title, company, date, location, tasks }) => (
  <div className="experience">
    <h3>{title} - {company}</h3>
    <p><em>{date}, {location}</em></p>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </div>
);

export default Experience;
