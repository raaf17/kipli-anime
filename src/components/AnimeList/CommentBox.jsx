import prisma from '@/libs/prisma'
import React from 'react'

const CommentBox = async({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({
    where: {
      anime_mal_id
    }
  });

  return (
    <div className='grid grid-cols-2 gap-2 mb-4'>
      {comments.map(comment => {
        return (
          <div key={comment.id} className='text-color-dark bg-color-primary p-4 rounded'>
            <p className='text-bold'>{comment.username}</p>
            <p className='italic'>{comment.comment}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CommentBox