// export default function TabButton(props){
//     return(
//     <li><button>{props.children}</button></li>
//     )
// }
// or
export default function TabButton({ children ,onSelect}) {
    // function clickHandler(){
    //     console.log("Hello");
    // }
    return(
    <li>
        <button onClick={onSelect}>{ children }</button>
    </li>  
    )

}