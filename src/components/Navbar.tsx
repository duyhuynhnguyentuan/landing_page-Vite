import {motion} from "framer-motion"

const Navbar = () => {
  const navbarAnimation={
    hidden:{
      y:-100,
    },
    show:{
      y:0,
      transition:{
        delay:3.9,
        duration:0.5,
      }
    }
  }
  return (
    <motion.nav className='flex justify-between items-center pt-4 text-black relative z-50'
    variants={navbarAnimation}
    initial="hidden"
    animate="show"
    >
        <div>
            <h1 className='font-primary text-3xl'>Đám Mây</h1>
        </div>
        <ul className='w-[250px] flex justify-between items-center'>
        <li><a href='#' className='text-lg font-semibold'>Art</a></li>
        <li><a href='#' className='text-lg font-semibold'>Painting</a></li>
        <li><a href='#' className='text-lg font-semibold'>Discover</a></li>
        </ul>
        <div>
            <a href='#' className='text-lg font-semibold'>Contact</a>
        </div>
    </motion.nav>
  )
}

export default Navbar