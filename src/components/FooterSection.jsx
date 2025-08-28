import React from 'react'

export default function FooterSection() {
  return (
    <footer className=' text-center p-8 text-gray-600 text-lg border-t bg-white/20 backdrop-blur-xl mt-10'>
   <p>
    &copy; {new Date().getFullYear()} Nexx. All Rights Reserved
   </p>
    </footer>
  )
}
