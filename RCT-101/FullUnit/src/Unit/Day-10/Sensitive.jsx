import React from 'react'
import D10Nav from './D10Nav'
function Sensitive() {
    return (
        <div>
            <D10Nav />
            <h1>THis page can contain sencitive details </h1>
            <p>User without authentication can harm resorces...</p>
        </div>
    )
}

export default Sensitive
