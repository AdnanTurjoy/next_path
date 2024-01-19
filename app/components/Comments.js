import React from 'react'

export default async function Comments({commentPromise}) {
	const comments = await commentPromise;
  return (
	<div className='p-5'>
             <h1 className='text-green-400'>Comments</h1>
			 <ul>
				{comments.map(comment =><li className='mb-3' key={comment.id}>{comment.body}</li>)}
			 </ul>
		</div>
  )
}
