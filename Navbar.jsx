import React from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link} from 'react-scroll'




function Navbars() {
  return (
<Navbar fluid rounded className='bg-green-200'>
 <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded  />

      <Navbar.Toggle />
   
    <Navbar.Collapse>
      <Navbar.Link href="#home"><Link
            to="home-section"
            smooth={true}
            duration={1000}
            offset={-70}
            className="nav-link"
          >Home</Link></Navbar.Link>
      <Navbar.Link href="#skills">
      <Link
            to="skills-section"
            smooth={true}
            duration={1000}
            className="nav-link"
            offset={-70}
          >Skills</Link></Navbar.Link>
      <Navbar.Link href="#contacts">
      <Link
            to="contact-section"
            smooth={true}
            duration={1000}
            className="nav-link"
            offset={-70}
          >Contacts</Link></Navbar.Link>
    </Navbar.Collapse>
   

  </Navbar>


  )
}

export default Navbars