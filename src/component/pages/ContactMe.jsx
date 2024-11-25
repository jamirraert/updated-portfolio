import Heading from '../common/Heading'

const Contact = () => {
  return (
    <div className="p-[4rem] bg-444 h-screen line-height-[1.5] text-white overflow-hidden">
      <Heading flag='h1' className='!mt-[1vh] sm:text-center'>
        Contact <span className="text-primary">Me</span>
      </Heading>
      <Heading flag='h2' className='sm:text-center'>
        This is how you can reach me...
      </Heading>
      {/* <div className="grid gap-[0.7rem] grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mt-[1rem]">
        <div className='text-sm border-[3px] border-white px-[2.5rem] py-[1.5rem] 
          hover:py-[0.5rem] hover:px-[1.5rem] hover:bg-[#eece1a] hover:text-[#000] transition-all duration-500 ease-out'>
          <span className="text-primary">Email:</span>
          &nbsp;christian.baquiano0122@gmail.com
        </div>
        <div className='text-sm border-[3px] border-white px-[2.5rem] py-[1.5rem] 
          hover:py-[0.5rem] hover:px-[1.5rem] hover:bg-[#eece1a] hover:text-[#000] transition-all duration-500 ease-out'>
          <span className="text-primary">Phone:</span>
          &nbsp;09296718726
        </div>
        <div className='sm:text-sm border-[3px] border-white px-[2.5rem] py-[1.5rem] 
          hover:py-[0.5rem] hover:px-[1.5rem] hover:bg-[#eece1a] hover:text-[#000] transition-all duration-500 ease-out'>
          <span className="text-primary">Facebook:</span>
          Christian Fernan Baquiano
        </div>
      </div> */}
      <div className="mt-sm h-full">
        <div className="grid gap-[0.7rem] grid-cols-3 sm:grid-cols-1 md-grid-cols-1">
          <div className='border-white border-[3px] p-3 cursor-pointer inline-block w-full
          hover:py-[0.5rem] hover:px-[1.5rem] hover:bg-[#eece1a] hover:text-[#000] transition-all duration-500 ease-out'>
            <span className="text-primary break-words">Email:&nbsp;</span>
            <p>christian.baquiano0122@gmail.com</p>
          </div>
          <div className='border-white border-[3px] p-3 cursor-pointer inline-block w-full
          hover:py-[0.5rem] hover:px-[1.5rem] hover:bg-[#eece1a] hover:text-[#000] transition-all duration-500 ease-out'>
            <span className="text-primary">Phone:&nbsp;</span>
            <p>09296718726</p>
          </div>
          <div className='border-white border-[3px] p-3 cursor-pointer inline-block w-full
          hover:py-[0.5rem] hover:px-[1.5rem] hover:bg-[#eece1a] hover:text-[#000] transition-all duration-500 ease-out'>
            <span className="text-primary">Facebook:&nbsp;</span>
            <p>Christian Fernan Baquiano</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact