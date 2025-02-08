import { useState } from 'react';

import reactImage from "./assets/react-core-concepts.png";
import componentImage from "./assets/components.png";

import { CORE_CONCEPTS } from "./Data.js";
import { EXAMPLES } from "./Data.js";
import Header from "./Components/Header/Header.jsx";
import CoreConcept from "./Components/CoreConcept.jsx";
import TabButton from "./Components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function clickHandler(selectedButton) {
    //selectedButton=> Components, JSX, props, or state
    //console.log(selectedButton);
    //tabContent=selectedButton;
    setSelectedTopic(selectedButton)
    console.log(selectedTopic);
  }
  let tabContent = <p>Please Select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>

            <CoreConcept thisIsAVariable={CORE_CONCEPTS[0]} />
            <CoreConcept thisIsAVariable={CORE_CONCEPTS[1]} />
            <CoreConcept thisIsAVariable={CORE_CONCEPTS[2]} />
            <CoreConcept thisIsAVariable={CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => clickHandler('components')}>Components</TabButton>
            <TabButton onSelect={() => clickHandler('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => clickHandler('props')}>Props</TabButton>
            <TabButton onSelect={() => clickHandler('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>

  );

}

export default App;
/* <CoreConcept
    title={CORE_CONCEPTS[0].title} 
    description={CORE_CONCEPTS[0].description} 
    image={CORE_CONCEPTS[0].image}></CoreConcept>
  <CoreConcept 
    title={CORE_CONCEPTS[1].title} 
    description={CORE_CONCEPTS[1].description} 
    image={CORE_CONCEPTS[1].image}></CoreConcept>
  <CoreConcept 
    title={CORE_CONCEPTS[2].title} 
    description={CORE_CONCEPTS[2].description} 
    image={CORE_CONCEPTS[2].image}></CoreConcept>
    <CoreConcept 
      title={CORE_CONCEPTS[3].title} 
      description={CORE_CONCEPTS[3].description} 
      image={CORE_CONCEPTS[3].image}></CoreConcept>
      
      Alternative using spread operator 
      
      <CoreConcept {...CORE_CONCEPTS[0]}/>
      <CoreConcept {...CORE_CONCEPTS[1]}/>
      <CoreConcept {...CORE_CONCEPTS[2]}/>
      <CoreConcept {...CORE_CONCEPTS[3]}/>

      Alternative using spread operator 

      */
