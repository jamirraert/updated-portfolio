import Heading from '../common/Heading'

const Contact = () => {
  return (
    <div className="p-[4rem] bg-444 h-screen line-height-[1.5] text-white sm:h-auto md:h-auto">
      <Heading flag='h1' className='!mt-[1vh] sm:text-center'>
        Contact <span className="text-primary">Me</span>
      </Heading>
      <Heading flag='h2' className='sm:text-center'>
        This is how you can reach me...
      </Heading>
      <div className="flex flex-wrap justify-evenly items-center mt-[1rem]">
        <div className='text-[1.8rem] border-[3px] border-white border-primary px-[2.5rem] py-[1.5rem] mb-[3rem] 
          hover:py-[0.5rem] hover:px-[1.5rem] hover:bg-[#eece1a] hover:text-[#000] transition-all duration-500 ease-out'>
          <span className="text-primary">Email:</span>
          &nbsp;christian.baquiano0122@gmail.com
        </div>
        <div className='text-[1.8rem] border-[3px] border-white border-primary px-[2.5rem] py-[1.5rem] mb-[3rem] 
          hover:py-[0.5rem] hover:px-[1.5rem] hover:bg-[#eece1a] hover:text-[#000] transition-all duration-500 ease-out'>
          <span className="text-primary">Phone:</span>
          &nbsp;09296718726
        </div>
        <div className='text-[1.8rem] border-[3px] border-white border-primary px-[2.5rem] py-[1.5rem] mb-[3rem] 
          hover:py-[0.5rem] hover:px-[1.5rem] hover:bg-[#eece1a] hover:text-[#000] transition-all duration-500 ease-out'>
          <span className="text-primary">Facebook:</span>
          Christian Fernan Baquiano
        </div>
      </div>
    </div>
  )
}

export default Contact