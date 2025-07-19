
function Button({ btnText, color, click }) {

    return (
        <>
            <button style={{ color: color }} onClick={click}>{btnText}</button>
        </>
    )
}

export default Button
