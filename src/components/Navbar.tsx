

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center pt-4 text-black relative z-50'>
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
    </nav>
  )
}

export default Navbar