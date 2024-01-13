import { notFound } from 'next/navigation'
import React from 'react'

export default function Blog ({params}){

  if(params.id==='4') return notFound()
  return (
	<div>Your Blog Id: ..... {params.id}</div>
  )
}

