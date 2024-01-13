'use client'
import React from 'react'

export default function ButtonComponent() {
  return (
	<div>
		<button className='bg-orange-500 px-2 py-1 rounded-sm mt-2'
	onClick={()=>console.log("clicked the button!")}
                          >Click Here</button>
     </div>
  )
}
