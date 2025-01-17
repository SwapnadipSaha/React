function Header(){
    return(
        <header>
          <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            Fundamental React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
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
          <h2>Time to get started!</h2>
        </main>
      </div>
    );
  }
  
  export default App;
  