import React from 'react';

type ContactInfoProps = {
  email: string;
  github: string;
  linkedin: string;
};

const ContactInfo: React.FC<ContactInfoProps> = ({ email, github, linkedin }) => (
  <div className="personal-info">
    <h2>Contact</h2>
    <p>Email : <a href={`mailto:${email}`}>{email}</a></p>
    <p>GitHub : <a href={github} target="_blank" rel="noopener noreferrer">{github.split('/').pop()}</a></p>
    <p>LinkedIn : <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
  </div>
);

export default ContactInfo;
