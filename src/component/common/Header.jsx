import { useEffect, useState } from 'react';
import Portrait from '../../assets/images/chan2.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    const [transformBranding, setTransformBranding] = useState('translate3d(0, 0, 0)');
    const [transformNav, setTransformNav] = useState('translate3d(0, 0, 0)')
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState("home")

    const hamburger = () => {
        setIsOpen(!isOpen)
    }

    const handleActive = (active) => {
      setIsOpen(!isOpen)
      setIsActive(active)
    }

    useEffect(() => {
        const handleResize = () => {
        if(window.innerWidth <= 768) {
            setTransformBranding(isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)');
            setTransformNav(isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)')
        }else {
            setTransformBranding(isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)');
            setTransformNav(isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)')
        }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [isOpen])
  return (
    <header className='fixed z-20 w-[100%]'>
        <div className='fixed z-30 right-[35px] top-[35px] cursor-pointer transition-all duration-500 ease-out'
          style={{transform: isOpen ? 'rotate(180deg)' : ''}}
          onClick={hamburger}>
          <div className='w-[28px] h-[3px] mx-0 mt-0 mb-[5px] bg-white transition-all duration-500 ease-out'
            style={{transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : ''}}></div>
          <div className={`w-[28px] h-[3px] mx-0 mt-0 mb-[5px] bg-white transition-all duration-500 ease-out ${isOpen ? 'opacity-0': ''}`}></div>

          <div className='w-[28px] h-[3px] mx-0 mt-0 mb-[5px] bg-white transition-all duration-500 ease-out'
            style={{transform: isOpen ? 'rotate(-45deg) translate(7px, -6px)' : ''}}></div>  
        </div>
        <nav className={`opacity-[0.9] ${isOpen ? 'visible':'hidden'}`}>
          <div className={`float-left sm:float-none sm:w-[100%] sm:p-6 sm:h-auto w-[50%] sm:transform-none h-screen flex flex-col justify-center items-center
            flex-wrap overflow-hidden bg-444 transition-all duration-500 ease-out`}
            style={{transform: transformBranding}}>
            <div style={{backgroundImage: `url(${Portrait})`}} className='portrait'></div>
          </div>
          <ul className='float-right sm:float-none w-[50%] sm:w-[100%] sm:h-full h-screen flex flex-col flex-wrap items-center text-white
            justify-center overflow-hidden m-[0] p-[0] bg-3737 lis-none transition-all duration-500 ease-out'
            style={{transform: transformNav}}>
              <li className="transition-all duration 500 ease-out delay-[0.1s] hover:text-primary"
              style={{transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(600px, 0, 0)'}}>
                <Link to="/" className={`text-[35px] sm:text-[27px] uppercase py-[1rem] px-[0] inline-block
                  ${isActive === 'home' ? 'text-primary' : ''}`} 
                onClick={() =>handleActive('home')}>Home</Link></li>
              <li className="transition-all duration 500 ease-out delay-[0.2s] hover:text-primary"
              style={{transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(600px, 0, 0)'}}>
                <Link to="/about" className={`text-[35px] sm:text-[27px] uppercase py-[1rem] px-[0] inline-block
                  ${isActive === 'about' ? 'text-primary' : ''}`} 
                onClick={() =>handleActive('about')}>about me</Link></li>
              <li className="transition-all duration 500 ease-out delay-[0.3s] hover:text-primary"
              style={{transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(600px, 0, 0)'}}>
                <Link to="/work" className={`text-[35px] sm:text-[27px] uppercase py-[1rem] px-[0] inline-block
                  ${isActive === 'work' ? 'text-primary' : ''}`} 
                onClick={() =>handleActive('work')}>my work</Link></li>
              <li className="transition-all duration 500 ease-out delay-[0.4s] hover:text-primary"
              style={{transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(600px, 0, 0)'}}>
                <Link to="/contact" className={`text-[35px] sm:text-[27px] uppercase py-[1rem] px-[0] inline-block
                  ${isActive === 'contact' ? 'text-primary' : ''}`} 
                onClick={() =>handleActive('contact')}>how to reach me</Link></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header