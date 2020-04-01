import React, { Component } from 'react'
import data from './commentData'
import Comment from './Comment'

export class Comments extends Component {
    render() {
        return (
            <div>
                {/* 1. import data to Comments
                2. loop through data 
                3.display a comment component for each iteration
                4. pass data to the component as you loop through */}

                {data.comments.map((comment, index) => {
                    return <Comment key={index} name= {comment.name} description={comment.description}/>
                }
                )}


                
            </div>
        )
    }
}

export default Comments
