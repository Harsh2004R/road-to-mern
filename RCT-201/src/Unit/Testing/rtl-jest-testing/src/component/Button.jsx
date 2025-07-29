import React from 'react';
import styles from "./button.module.css";
function Button({ children, color, size, funBtn }) {

    return (
        <div>
            <button
                data-testid="custom-button"
                className={`${styles[color]} ${styles[size]}`}
                onClick={
                    () => { funBtn() }
                }
            >
                {children}
            </button>
        </div>
    )
}

export default Button
