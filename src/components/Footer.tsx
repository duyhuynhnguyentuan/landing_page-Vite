
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className=' flex justify-center'>
        <ul className=' w-[300px] flex text-black justify-between items-center'>
            <li><a href='#' className='text-2xl font-secondary'><AiFillInstagram/></a></li>
            <li><a href='#' className='text-2xl font-secondary'><AiFillFacebook/></a></li>
            <li><a href='#' className='text-2xl font-secondary'><AiFillLinkedin/></a></li>
            
        </ul>

    </footer>
  )
}

export default Footer