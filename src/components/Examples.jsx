import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';

export default function Examples() {
  const [selectedBtn, setSelectedBtn] = useState();
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedBtn(selectedButton);
    setSelectedTopic(EXAMPLES[selectedButton]);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>

      <menu>
        <TabButton
          isSelected={selectedBtn === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedBtn === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedBtn === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedBtn === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>

      {!selectedTopic ? <p>Please select a topic.</p> : null}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{selectedTopic.title}</h3>
          <p>{selectedTopic.description}</p>
          <pre>
            <code>{selectedTopic.code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
