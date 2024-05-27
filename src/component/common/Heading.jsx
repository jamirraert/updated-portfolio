const Heading = ({children, flag, className}) => {
    switch(flag) {
        case 'h1': 
            return <h1 className={`sm:text-4xl text-5xl ${className}`}>{children}</h1>
            break;
        case 'h2':
            return <h2 className={`sm:text-xl text-2xl mb-[1.5rem] px-[0.2rem] py-[1rem] mt-[1rem] ${className}`}
            style={{backgroundColor: 'rgba(73, 73, 73, 0.5)'}}>
              {children}</h2> 
            break;
        default:
            return <h1 className='sm:text-4xl text-5xl mt-[20vh]'>{children}</h1>
            break;
            
    }
}

export default Heading