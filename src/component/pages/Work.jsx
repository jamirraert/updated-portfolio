import Heading from "../common/Heading"
import img1 from '../../assets/images/project1.jpg'
import img2 from '../../assets/images/project2.jpg'
import img3 from '../../assets/images/project3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Work = () => {
  return (
    <div className="p-[4rem] bg-444 h-screen line-height-[1.5] text-white sm:h-auto md:h-auto">
      <Heading flag='h1' className='!mt-[1vh] sm:text-center'>
        My <span className="text-primary">Work</span>
      </Heading>
      <Heading flag='h2' className='sm:text-center'>
        Check out some of my projects...
      </Heading>
      <div className="grid gap-[0.7rem] grid-cols-3">
        <div>
          <a href="#" target="__blank" rel="noopener noreferrer">
            <img src={img1} alt="Image 1"  className="border-[3px] border-solid border-primary w-full"/>
          </a>
          <a href="https://ruralnet.ph" target="__blank"
            className="bg-c4 block mb-[0.3rem] py-[0.5rem] px-[1rem] text-333 mt-2 hover:bg-primary hover:text-white
            transition-all duration-500 ease-out">
            <FontAwesomeIcon icon={faEye} />&nbsp;
            Project
          </a>
        </div>
        <div>
          <a href="https://micro.cashko-insurance.com" target="__blank" rel="noopener noreferrer">
            <img src={img2} alt="Image 2" className="border-[3px] border-solid border-primary w-full"/>
          </a>
          <a href="https://micro.cashko-insurance.com" target="__blank"
            className="bg-c4 block mb-[0.3rem] py-[0.5rem] px-[1rem] text-333 mt-2 hover:bg-primary hover:text-white
            transition-all duration-500 ease-out">
            <FontAwesomeIcon icon={faEye} />&nbsp;
            Project
          </a>
        </div>
        <div>
          <a href="https://cashko-insurance.com" target="__blank" rel="noopener noreferrer">
            <img src={img3} alt="Image 3" className="border-[3px] border-solid border-primary w-full"/>
          </a>
          <a href="https://cashko-insurance.com" target="__blank"
            className="bg-c4 block mb-[0.3rem] py-[0.5rem] px-[1rem] text-333 mt-2 hover:bg-primary hover:text-white
            transition-all duration-500 ease-out">
            <FontAwesomeIcon icon={faEye} />&nbsp;
            Project
          </a>
        </div>
      </div>
    </div>
  )
}

export default Work