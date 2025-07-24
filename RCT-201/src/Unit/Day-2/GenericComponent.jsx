import React from 'react'
import GenericBox from './GenericBox'

function GenericComponent() {
    return (
        <div>
            <GenericBox style={{ backgroundColor: "#e0f7fa", color: "#333" }}>
                <h2>Hello from GenericBox!</h2>
                <p>This is a reusable React component with simple styling.</p>
            </GenericBox>
        </div>
    )
}

export default GenericComponent
