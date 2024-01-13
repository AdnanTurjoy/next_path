import React from 'react'
import Logo from '@/public/images/logo.JPG'
import Image from 'next/image'
export default function MissionPage() {
  return (
	<div>
     <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quae. </div>
	 <div className='w-[300px]'>
	   <Image placeholder='blur' blurDataURL='../../../public/next.svg' src={Logo} alt='logo'/>
	 </div>
	</div>	
  )
}
