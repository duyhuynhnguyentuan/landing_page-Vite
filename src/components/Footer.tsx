import {motion} from "framer-motion"

import {AiFillInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
  const footerAnimation={
    hidden:{
      y:100,
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
    <motion.footer className=' flex justify-center'
    variants={footerAnimation}
    initial="hidden"
    animate="show"
    >
        <ul className=' w-[300px] flex text-black justify-between items-center'>
            <li><a href='#' className='text-2xl font-secondary'><AiFillInstagram/></a></li>
            <li><a href='#' className='text-2xl font-secondary'><AiFillFacebook/></a></li>
            <li><a href='#' className='text-2xl font-secondary'><AiFillLinkedin/></a></li>
            
        </ul>

    </motion.footer>
  )
}

export default Footer