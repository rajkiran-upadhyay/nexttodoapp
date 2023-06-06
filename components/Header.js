import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span class="ml-3 text-xl">Todolist</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <Link href={"/"}  class="mr-5 hover:text-gray-900" style={{color:'white'}}>Home</Link>
    
      <Link href={"/todos"}  class="mr-5 hover:text-gray-900" style={{color:'white'}}>My Todos</Link>
  

    </nav>
   
  </div>
</header>
  )
}

export default Header