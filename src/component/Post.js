import React from 'react'

const Post = (props) => {
    return (
        <div>
           <h2> category - {props.match.params.category}</h2>
           <h2> category ID - {props.match.params.category.id}</h2>
        </div>
    )
}

export default Post
