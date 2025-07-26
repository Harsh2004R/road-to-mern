import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { incAction, decAction, resetAction } from "../../Redux/Redux-Psc-S2/action"
function PSCCounter() {
    const { Theme, Counter } = useSelector((store) => {
        return {
            Theme: store.Theme,
            Counter: store.Counter,
        }
    }, shallowEqual)
    const dispatch = useDispatch();
    const containerStyle = {
        textAlign: 'center',
        padding: '30px',
        fontFamily: 'Arial',
        backgroundColor: Theme === "Dark" ? "#383737ff" : "#F0F0F0",
        borderRadius: '12px',
        width: '300px',
        margin: '40px auto',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    };

    const buttonStyle = {
        padding: '10px 20px',
        margin: '10px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '6px',
        backgroundColor: '#007bff',
        color: '#fff'
    };

    const counterStyle = {
        fontSize: '32px',
        fontWeight: 'bold',
        margin: '20px 0',
        color: Theme === "Dark" ? "#fff" : "#000"
    };
    // console.log(Theme, Counter)

    const handleIncrement = () => {
        dispatch(incAction(1))

    }
    const handleDecrement = () => {
        dispatch(decAction(1))
    }
    const handleReset = () => {
        dispatch(resetAction())
    }





    return (
        <div>

            <div style={containerStyle}>
                <h2 style={{ color: Theme === "Dark" ? "#fff" : "#000" }}>PSC Counter</h2>
                <div style={counterStyle}>{Counter}</div>
                <button style={buttonStyle} onClick={handleIncrement}>Increment</button>
                <button style={{ ...buttonStyle, backgroundColor: '#dc3545' }} onClick={handleDecrement} > Decrement</button>
                <button style={{ ...buttonStyle, backgroundColor: '#6c757d' }} onClick={handleReset}>Reset</button>
            </div>
        </div >
    );
}

export default PSCCounter;
