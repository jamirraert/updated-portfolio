import Heading from "../common/Heading"
import IMG from "../../assets/images/chan2.jpg"

const About = () => {
  return (
    <div className="p-[4rem] bg-444 h-screen line-height-[1.5] text-white sm:h-auto md:h-auto">
      <Heading flag='h1' className='!mt-[1vh] sm:text-center'>
        About <span className="text-primary">Me</span>
      </Heading>
      <Heading flag='h2' className='sm:text-center'>
        Let me tell you a few things...
      </Heading>

      <div className="custom-grid sm:text-center">
        <img src={IMG} alt="" className="h-[250px] w-[250px] rounded-full border border-primary border-[3px] bio-image m-auto" />
       <div className="bio">
        <Heading flag='h1' className='text-primary sm:my-[1rem]'>
            BIO
          </Heading>
          <p className="pb-2 text-md text-lg">
          Hi, I'm Christian Fernan Baquiano, a passionate software developer with a keen interest in building innovative solutions to real-world problems. I graduated from Cebu Eastern College with a Bachelor's degree in Information Technology. I specialize in developing both system back-ends and front-ends.
          </p>
          <p className="pb-2 text-md text-lg">In my professional career, I've had the opportunity to work with diverse teams, from working on front-end to back-end and creating servers for applications to deployment. I've gained valuable hands-on experience in Java, Spring Boot, React, Tailwind CSS, Ubuntu, Nginx, Apache, Tomcat, Laravel, Git, Jira, and collaborating with QA teams.</p>
       </div>
       <div className="job1 bg-515 p-[0.5rem] border-b-4 border-primary mb-[1rem]">
          <h3 className="text-xl mb-2">Mcdonals Paseo Arcenas</h3>
          <h6 className="text-md font-bold text-primary mb-2">Service Crew</h6>
          <p>I was an all-around service crew member, originally assigned to production, which involved cooking products.</p>
       </div>
       <div className="job2 bg-515 p-[0.5rem] border-b-4 border-primary mb-[1rem]">
          <h3 className="text-xl mb-2">ECS & JTCS</h3> 
          <h6 className="text-md font-bold text-primary mb-2">Computer Technician Hardware & Software</h6>
        
          <p>I completed 350 hours for Practicum 1 at Extreme Coretech Solution and 500 hours for Practicum 2 at Johann Trocio Computer Shop. For Practicum 2, I was hired as an OJT Web Developer at Proweaver; however, due to the pandemic, the opportunity was canceled.</p>
       </div>
       <div className="job3 bg-515 p-[0.5rem] border-b-4 border-primary mb-[1rem]">
        <h3 className="text-xl mb-2">RuralNet INC</h3>
          <h6 className="text-md font-bold text-primary mb-2">Programmer II - Fullstack Development</h6>
          <p>I work on both back-end and front-end development, and I also use Ubuntu to create servers for application deployment.</p>
       </div>
      </div>
    </div>
  )
}

export default About