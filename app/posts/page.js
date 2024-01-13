import React from 'react'
import { getPost } from '../lib/getPosts'
import Link from 'next/link'

export default async function PostPage() {
	const posts = await getPost()
	//console.log(posts);
  return (
	<div className='p-6'>
		<h1>all page</h1>
		<ul className='mt-6'>
			{posts.map(post=>{
				return <Link href={`/posts/${post.id}`}><li key={post.id}>{post.title}</li></Link> 
			})}
		</ul>
	</div>
  )
}
