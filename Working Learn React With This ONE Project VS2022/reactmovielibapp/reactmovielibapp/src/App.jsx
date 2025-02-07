
import './App.css'
import MovieCard from './Components/MovieCard.jsx';
function App() {


    return (
        <> 
        </>
    )
}




//Demo

/*function App() {

  return (    
    <>
    { <Text display="Hello"></Text>
    <Text  display="Swapnadip"/>
    Any one of the syntax }
    </>
  )
}

 function Text({display}){
   return(
     <div>
      {display}
     </div>
   )
 }
 
 function App() {
    const movieNumber = 1;

    return (
        <>  
         ------------Syntax 1 of conditional rendering------------  
    return (
        <>{movieNumber === 2 ? (
            <MovieCard movie={{ title: "Swapnadip Saha", release_date: "06.02.2024" }} />
        ) : (
            <MovieCard movie={{ title: "Sourabh Chakraborty", release_date: "01.12.2020" }} />
        ) }
        </>
    )
}



        ------------Syntax 2 of conditional rendering------------    
            {movieNumber ===1 && <MovieCard movie={{ title: "Swapnadip Saha", release_date: "06.02.2024" }} />}
        </>
    )
}

 
 
 
 */


export default App
