import React from 'react';

type InfoSectionProps = {
  title: string;
  items: string[];
};

const InfoSection: React.FC<InfoSectionProps> = ({ title, items }) => (
  <div className={title.toLowerCase().replace(/\s+/g, '-')}>
    <h2>{title}</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default InfoSection;
