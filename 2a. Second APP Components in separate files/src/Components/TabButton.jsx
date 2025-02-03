// export default function TabButton(props){
//     return(
//     <li><button>{props.children}</button></li>
//     )
// }
// or
export default function TabButton({ children }) {
    function clickHandler(){
        console.log("Hello");
    }
    return(
    <li>
        <button onClick={clickHandler}>{ children }</button>
    </li>  
    )

}