import React from 'react';

type TagListProps = {
  tags: string[];
};

const TagList: React.FC<TagListProps> = ({ tags }) => (
  <div className="skills">
    <h2>Compétences Techniques</h2>
    <div>
      {tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
      ))}
    </div>
  </div>
);

export default TagList;
