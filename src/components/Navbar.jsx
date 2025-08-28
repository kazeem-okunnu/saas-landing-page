import {useState,React} from 'react'
import logoURL from "../assets/logo.png"
import {useScroll,useMotionValueEvent} from "framer-motion"
import MobileMenu from './MobileMenu'
export default function Navbar() {
    const {scrollY} = useScroll()
    const [scrolled, setScrolled] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        
        if(latest>0 && !scrolled){
            setScrolled(true)
        }else if(latest ===0 &&scrolled){
          setScrolled(false)
        }
      })

      const defaultClasses = "transition-all absolute inset-0 -z-1"
      let navBarClasses = scrolled ? `${defaultClasses} border-b border-black/10 bg-white/75 backdrop-blur-lg`:
      `${defaultClasses} bg-transparent`;
    return (
        <div className="sticky inset-x-0 top-0 w-full  z-30">
            <div className={navBarClasses}></div>
            <div className="m-auto w-full max-w-screen-xl p-2.5 lg:px-20 relative">
                <div className='flex items-center justify-between'>
                    <div className="">
                        <img src={logoURL} className="h-20 w-20" />
                    </div>
                    <nav className='hidden md:block'>
                        <ul className='flex flex-row space-x-4 p-4 '>
                            <li><a href="#about" className='text-gray-600'>About Us</a></li>
                            <li><a href="#features" className='text-gray-600'>Features</a></li>
                            <li><a href="#pricing" className='text-gray-600'>Pricing</a></li>
                        </ul>
                    </nav>
                    <div className="hidden md:block">
                        <a className='bg-black px-4 py-2 rounded-md hover:bg-[#3b3a3a] text-white cursor-pointer' href="">Login </a>
                        <a className='bg-black px-4 py-2 rounded-md hover:bg-[#3b3a3a] text-white cursor-pointer ml-2' href="">sign up</a>


                    </div>
                    <MobileMenu/>
                </div>
            </div>
        </div>
    )
}
