import randomImage from "./assets/react-core-concepts.png"
import componentImage from "./assets/components.png"
const dynamicValue=["Fundamental","Crucial","Core"];


export const userData = {
  firstName: 'Maximilian', // feel free to replace the name value
  lastName: 'Schwarzmüller', // feel free to replace the name value
  title: 'Instructor', // feel free to replace the title value
};

export function User() {
  const { firstName, lastName, title } = userData;

  return (
    <div id="user" data-testid="user">
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{title}</p>
    </div>
  );
}

function genRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}
function Header(){
  const description=dynamicValue[genRandomInt(2)];
    return(
        <header>
          <img src={randomImage} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {description} React concepts you will need for almost any app you are
            going to build!
            
            
          </p>
        </header>
    )
}
function CoreConcepts(props){
  return(
    <li>
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}
function App() {
    return (
      <div>
        {/* <header>
          <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            Fundamental React concepts you will need for almost any app you are
            going to build!
          </p>
        </header> */

            // the header section will now be moved to new component or function.
            // rule the function or component will be always initcap and the function name will be the tag here
        <Header></Header>
        }
        <main>
          <section id="core-concepts">
          <ul>          
            <CoreConcepts 
              title="Components" 
              description="The core UI"
              image={componentImage}/>
            <CoreConcepts/>
            <CoreConcepts/>
            <CoreConcepts/>
          </ul>
          </section>


          <h2>Time to get started!</h2>
          <User />
        </main>
       
      </div>
      
    );
  }
  
  export default App;

