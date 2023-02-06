import React from 'react'

function CommentsList({comments}) {
  return (
    <div>
      {comments.map((comment)=> {
          return (
            <div>
              <p>{comment.author}</p>
              <p>{comment.comment}</p>
              <p>{comment.rate}</p>
              <button>Delete</button>
            </div>
          )
      }
      )}
    </div>
  )
}

export default CommentsList