import React from 'react'

 const Tweet=({text,author,date})=> {
    return (
        <div>
            <h1>{text}</h1>
            <h2>{author}</h2>
            <h3>{date}</h3>

        </div>
    )
}

export default Tweet;