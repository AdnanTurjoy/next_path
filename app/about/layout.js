import Link from 'next/link'
import React from 'react'

export default function AboutLayout({children}) {
  return (
	<div className='p-6'>
		 <nav className='p-4'>
           <ul className='flex gap-3'>
              <li> <Link href="/about/mission">Mission |</Link></li>
              <li> <Link href="/vission">Vission</Link></li>
           </ul>
        </nav>
		{children}
	</div>
  )
}
