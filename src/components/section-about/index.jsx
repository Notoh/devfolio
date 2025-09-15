import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me Test">
      <div className="mb-6">
        <p>{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
