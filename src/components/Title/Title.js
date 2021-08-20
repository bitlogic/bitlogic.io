import React from 'react'

const Title = (text, fragment) => {
    return (
        <h2>
            {text}
            {fragment && (
                <span className="fragment">
                    {fragment}
                </span>
            )}
            
        </h2>
    )
}

export default Title
