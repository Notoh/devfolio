import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p style="white-space: pre-line">{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
