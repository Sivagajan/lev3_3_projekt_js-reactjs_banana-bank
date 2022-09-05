const Buttons = (props) => {

    return(
        <button onClick={()=>props.add()} className="einzahlen">{props.btnName}</button>
    )
}
export default Buttons