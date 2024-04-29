

const DivElement = (props) => {
    return (
        <div className="div-item" onClick={props.onClick} style={props.style}>{props.content}</div>
    )
}

export default DivElement