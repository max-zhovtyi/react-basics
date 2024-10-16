import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from '../data';

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item, index) => {
          return (
            <CoreConcept
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </ul>
    </section>
  );
}
