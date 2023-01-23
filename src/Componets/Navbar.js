import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

// import React from "react";
// import { NavLink } from 'react-router-dom';

import {
  AiOutlineHome,
  // AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts,
  AiOutlineMenu,
  AiFillCaretDown
  // AiOutlineRiContactsLine,
  
} from "react-icons/ai";






function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          GATES N FENCES
          {/* <NavLink id="Logo" to='/'>Gates N Fences</NavLink> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>

              
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/About"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Contact"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineContacts
                  style={{ marginBottom: "2px" }}
                />{" "}
                Contact Us
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>

    {/* <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div> */}


    

    <div className="na2">


    <Navbar className="Nav2"  variant="dark" bg="" expand="lg">
      <Container fluid>
        {/* <Navbar.Toggle aria-controls="" /> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="ico">
              <AiOutlineMenu className="ico" style={{ marginBottom: "10px" }}/>{" "}

          </div>
          <Nav className="cd">
            <NavDropdown className="ic" 
              id="nav-dropdown-dark-example"
              title="All"
              
              menuVariant="dark"
              >
            <div className="ab" >

              <NavDropdown.Item href="#action/3.1"><AiOutlineUser style={{ marginBottom: "2px" }}/>{" "} User Name</NavDropdown.Item>
              <NavDropdown.Divider className="divider" />

              <NavDropdown.Item href="./Inventory">Driveway Gates</NavDropdown.Item>
              <NavDropdown.Item href="./Inventory">Garden Gates</NavDropdown.Item>
              <NavDropdown.Item href="./Inventory">Fencing</NavDropdown.Item>
              <NavDropdown.Item href="./Inventory">Railings</NavDropdown.Item>
              <NavDropdown.Item href="./Inventory">Openers-Operators</NavDropdown.Item>
              <NavDropdown.Item href="./Inventory">Main Control Board</NavDropdown.Item>
              <NavDropdown.Item href="./Inventory">Remote Controls</NavDropdown.Item>
              <NavDropdown.Item href="./Inventory">Receivers</NavDropdown.Item>
              <NavDropdown.Item href="./Inventory">Telephone Entry</NavDropdown.Item>
              <NavDropdown.Item href="./Inventory">Safety Equipment</NavDropdown.Item>
              <NavDropdown.Item href="./Inventory">Gate Accessories</NavDropdown.Item>
              <NavDropdown.Item href="./Inventory">Gate Operator Parts</NavDropdown.Item>
            </div>
            </NavDropdown>

  
            <NavDropdown className="" 
              id="nav-dropdown-dark-example"
              
              title="Driveway Gates"
              
              menuVariant="dark"
              >
            <div className="ab" >

              <NavDropdown.Item href="/Inventory"> Modern Driveway Gates </NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">Custom Driveway Gates
              </NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">Privacy Driveway Gates</NavDropdown.Item>
            </div>
            </NavDropdown>




            <NavDropdown className="" 
              id="nav-dropdown-dark-example"
              title="Garden Gates"
              
              menuVariant="dark"
              >
            <div className="ab" >

              <NavDropdown.Item href="/Inventory"> Modern Garden Gates </NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">Privacy Garden Gates
              </NavDropdown.Item>

            </div>
            </NavDropdown>



            <NavDropdown className="" 
              id="nav-dropdown-dark-example"
              title="Fencing"
              
              menuVariant="dark"
              >
            <div className="ab" >

              <NavDropdown.Item href="/Inventory"> Fencing_2 </NavDropdown.Item>

            </div>
            </NavDropdown>




            <NavDropdown className="" 
              id="nav-dropdown-dark-example"
              title="Railings"
              
              menuVariant="dark"
              >
            <div className="ab" >

              <NavDropdown.Item href="/Inventory"> Modern Balcony Railings </NavDropdown.Item>

            </div>
            </NavDropdown>



            <NavDropdown className="" 
              id="nav-dropdown-dark-example"
              title="Openers - Operators"
              
              menuVariant="dark"
              >
            <div className="ab" >

              <NavDropdown.Item href="/Inventory"> Ramset </NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">FAAC
              </NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">Apollo</NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">BFT</NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">Power Master</NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">Platinum Gate Openers</NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">Liftmaster</NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">Elite</NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">Doorking</NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">OSCO</NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">Alistar</NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">Viking</NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">Eagle</NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">SEA</NavDropdown.Item>
              <NavDropdown.Item href="/Inventory">Hysecurity</NavDropdown.Item>
   
            </div>
            </NavDropdown>


            {/* <Nav.Link className="itm"
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                >
                Driveway Gates
              </Nav.Link> */}

            {/* <Nav.Link className="itm1"
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                Garden Gates
              </Nav.Link> */}
{/* 
            <Nav.Link className="tm2"
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                Fencing
              </Nav.Link> */}

{/* 
            <Nav.Link className="itm3"
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                Railings
              </Nav.Link> */}






          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>





    </div>




    <div className="lastnv">

    <nav>

    
    <Nav.Link className="itm4"
        as={Link}
        to="/Inventory"
        onClick={() => updateExpanded(false)}
      >
        Main Control Board
      </Nav.Link>

    <Nav.Link className="itm3"
        as={Link}
        to="/Inventory"
        onClick={() => updateExpanded(false)}
      >
        Remote Controls
      </Nav.Link>


    <Nav.Link className="tm2"
        as={Link}
        to="/Inventory"
        onClick={() => updateExpanded(false)}
      >
        Receiverss
      </Nav.Link>

    <Nav.Link className="itm1"
        as={Link}
        to="/Inventory"
        onClick={() => updateExpanded(false)}
      >
        Telephone Entry
      </Nav.Link>


    <Nav.Link className="itm"
        as={Link}
        to="/Inventory"
        onClick={() => updateExpanded(false)}
      >
        Safety Equipment
      </Nav.Link>


    <Nav.Link className="itm0"
        as={Link}
        to="/Inventory"
        onClick={() => updateExpanded(false)}
      >
        Gate Accessories

      </Nav.Link>

    <Nav.Link className="itm-1"
        as={Link}
        to="/Inventory"
        onClick={() => updateExpanded(false)}
      >
        Gate Operator Parts

      </Nav.Link>


    </nav>

    </div>




    
    </Navbar>


  );
}

export default NavBar;
