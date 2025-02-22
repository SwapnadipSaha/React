import reactImage from "./assets/react-core-concepts.png";
import componentImage from "./assets/components.png";

import {CORE_CONCEPTS} from "./Data.js";

const dynamicValue=["Fundamental","Crucial","Core"];

function genRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}


function Header()
{
  const randomValue=dynamicValue [genRandomInt(2)];
  return (
    <header>
    <img src={reactImage} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {randomValue} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}
// function CoreConcept(props) {
//   return (
//   <li>
//   <img src={props.image} alt={props.title} />
//   <h3>{props.title}</h3>
//   <p>{props.description}</p>
//   </li>
//   );

//   }

// or alternative

// function CoreConcept({image,title,description}) {
//   return (
//   <li>
//   <img src={image} alt={title} />
//   <h3>{title}</h3>
//   <p>{description}</p>
//   </li>
//   );

//   }

  // or alternative

  function CoreConcept({thisIsAVariable}) {
    return (
    <li>
    <img src={thisIsAVariable.image} alt={thisIsAVariable.title} />
    <h3>{thisIsAVariable.title}</h3>
    <p>{thisIsAVariable.description}</p>
    </li>
    );
  
    }
function App() {
    return (
      <div>        
        <Header/> 
          <main>
            <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
             {/* <CoreConcept 
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
                }
                <CoreConcept thisIsAVariable={CORE_CONCEPTS[0]}/>
                <CoreConcept thisIsAVariable={CORE_CONCEPTS[1]}/>
                <CoreConcept thisIsAVariable={CORE_CONCEPTS[2]}/>
                <CoreConcept thisIsAVariable={CORE_CONCEPTS[3]}/>
            </ul>

            </section>
           
          </main>          
      </div>
      
    );
  }
    
  export default App;

