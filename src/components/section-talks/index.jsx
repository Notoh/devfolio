import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionTalks = ({ talks }) => {
  if (!talks.length) return null;

  return (
    <Section title="Talks">
      {talks.map((talk) => (
        <SummaryItem
          key={talk.name}
          name={talk.name}
          description={talk.description}
          link={talk.link}
        />
      ))}
    </Section>
  );
};

export default SectionTalks;
