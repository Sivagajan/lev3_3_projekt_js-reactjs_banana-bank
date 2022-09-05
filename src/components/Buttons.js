const Buttons = (props) => {

    return(
        <button onClick={()=>props.func()} className="einzahlen">{props.btnName}</button>
    )
}
export default Buttons