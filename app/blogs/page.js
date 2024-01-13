import Link from 'next/link'
import React from 'react'

export default function BlogsPage (){
  // throw new Error("huge error in about page")
  const blogs = [
    {
      id:1,
      title: "page 1",
      description: "1111111em1sjgdsdiiiiid djd ddd"
    },
    {
      id:2,
      title: "page 2",
      description: "22 222iid djd ddd"
    },
    {
      id:3,
      title: "page 3",
      description: "333"
    }
  ]
  return (
	<div className='p-3'>
    <h1>Blogss Page</h1>
    {
      blogs.map((blog,id)=>{
        return  <Link href={`/blogs/${blog.id}`}><p key={blog.id}>{blog.title}</p></Link> 
      })
    }
  
  
  </div>
  )
}

