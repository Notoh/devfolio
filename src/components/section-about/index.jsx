import React from 'react';

import Section from '../section';

const SectionAbout = ({ about, research }) => {
  return (
    <>
      <Section title="About Me">
        <div className="mb-6">
          <p className="whitespace-pre-line">{about}</p>
        </div>
      </Section>
      <Section title="Research">
        <div className="mb-6">
          <p className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: research }}></p>
        </div>
      </Section>
    </>
  );
};

export default SectionAbout;
