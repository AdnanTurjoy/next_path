

import React from 'react'
import ButtonComponent from '@/app/components/ButtonComponent'
export const metadata = {
  title: 'about',
  description: 'this is about page',
}
export default function about (){
  // throw new Error("huge error in about page")
  return (
    <>
    	<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quo eos dignissimos,
     accusantium quibusdam esse amet unde qui quisquam provident odio asperiores veniam ea fugiat 
     vero repellat eaque debitis natus.
     
     </div>
     
      <ButtonComponent/>
    </>

  )
}

