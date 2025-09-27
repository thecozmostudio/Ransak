import React , { useState }  from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { HiX, HiMenu } from 'react-icons/hi';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    
    const location = useLocation();
    const navigate = useNavigate();
    const activeLink = location.pathname;

    //headers navigation button link
    const navLinks = [
        {href : "/", lable: "Home"},
        {href : "/about", lable: "About Us"},
        {href : "/Service", lable: "Our Service"}
    ]

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-teal-sm backdrop-blur-md z-50 border-b border-gray-50 dark:border-gray-900 shadow-sm'>
            <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-2 md:h-20 h-20'>
                {/*logo*/}
                <div className='flex items-center gap-1 cursor-pointer '>
                    {/* bg-teal-600 rounded-lg px-6 py-1  */}
                    <img src='/LogoWorldWiss.png' alt='Logo' className='w-15 h-15'/>
                    <div className='ml-2 text-sm lg:text-xl font-medium dark:text-teal-100 text-teal-600'>Ransak Packaging</div>
                </div>
    
                {/* Mobile menu button */}
                    <button onClick={() => setMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
                        {
                            isMenuOpen ? <HiX className='size-8 dark:text-teal-100'/> : <HiMenu className='size-8 dark:text-teal-100'/>
                        }
                    </button>
    
    
                {/*desktop nav*/}
                <div className='hidden md:flex items-center gap-10'>
                    {
                        navLinks.map((link, index) => (
                            <a key={index} href={link.href} 
                            onClick={() => setActiveLink(link.href)}
                            className={`text-sm lg:text-xl font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                                after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all 
                                ${ activeLink === link.href ? "text-teal-600 after:w-full": "text-gray-600 dark:text-teal-100 hover:text-gray-900 dark:hover:text-teal-600" }`}>
                                {link.lable}
                            </a> 
                        ))
                    }
                </div>    
            </div>
    
            {/* mobile menu Items */}
            {
                isMenuOpen && (
                    <div className='md:hidden bg-white dark:bg-gray-900 border-t border-white dark:border-gray-900 py-4'>
                        <div className='container mx-auto px-4 space-y-4'>
                            {navLinks.map((link, index) => (
                                <a key={index}
                                onClick={() => {
                                    setActiveLink(link.href);
                                    setMenuOpen(false);
                                }}
                                className={`block text-sm font-medium py-2 ${activeLink === link.href ? "text-teal-600" : "text-gray-600 hover:text-gray-900 dark:text-teal-100 dark:hover:text-teal-600"}`} href={link.href}>{link.lable}</a>
                            ))}
    

                        </div>
                    </div>
                )
            }
        </nav>
  )
}

export default Header