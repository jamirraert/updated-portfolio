import IMG from '../../assets/images/background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from '../common/Heading';
import CV from '../../assets/cv/Christian_Fernan_Baquiano.pdf'

const Home = () => {

  return (
    <>
      <div className="h-screen bg-img text-white relative" 
      style={{backgroundImage: `url(${IMG})`}}>
          <div className="absolute top-0 left-0 w-screen h-screen p-[4rem] sm:text-center" style={{backgroundColor: 'rgba(68, 68, 68, 0.7)'}}>
            <Heading>
              Christian Fernan <span className="text-primary">Baquiano</span>
            </Heading>

            <Heading flag='h2'>
              Back-end & Front-end Developer
            </Heading>
            
            <div>
              <a href="https://web.facebook.com/jamirraert/" 
              target='__blank'
              title='Visit Facebook'
              className='hover:text-primary mr-[0.9rem]'> 
                <FontAwesomeIcon size='2xl' icon={['fab', 'facebook']} />
              </a>
              <a href="https://www.linkedin.com/in/christian-fernan-baquiano-a81285281/" 
              target='__blank'
              title='Visit Linkedin'
              className='hover:text-primary mr-[0.9rem]'>
                <FontAwesomeIcon size='2xl' icon={['fab', 'linkedin']} />
              </a>
              <a href={CV} 
              title='Download CV'
              download='CFBaquiano_CV.pdf'
              className='hover:text-primary mr-[0.9rem]'>
                <FontAwesomeIcon size='2xl' icon={['fas', 'download']} />
              </a>
            </div>
          </div>
      </div>
    </>    
  )
}

export default Home