import "./CoreConcepts.css";
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

  export default function CoreConcept({thisIsAVariable}) {
    return (
    <li>
    <img src={thisIsAVariable.image} alt={thisIsAVariable.title} />
    <h3>{thisIsAVariable.title}</h3>
    <p>{thisIsAVariable.description}</p>
    </li>
    );
  
    }