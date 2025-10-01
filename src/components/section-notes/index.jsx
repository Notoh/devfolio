import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionNotes = ({ notes }) => {
  if (!notes.length) return null;

  return (
    <Section title="Notes">
      {notes.map((note) => (
        <SummaryItem
          key={note.name}
          name={note.name}
          description={note.description}
          link={note.link}
        />
      ))}
    </Section>
  );
};

export default SectionNotes;