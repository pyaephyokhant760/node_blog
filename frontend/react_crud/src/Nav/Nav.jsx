import { useState, useEffect } from 'react';
import { Container, Nav as BootstrapNav, Navbar, Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [login,setLogin] = useState("Login");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      className={`navbar-premium fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-wrapper">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <span className="brand-text">NEXUS</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="nexus-nav" className="custom-toggle">
          <span className="toggle-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="nexus-nav">
          <BootstrapNav className="mx-auto nav-items-group">
            <BootstrapNav.Link href="#products" className="nav-link-item active">Products</BootstrapNav.Link>
            <BootstrapNav.Link href="#solutions" className="nav-link-item">Solutions</BootstrapNav.Link>
            <BootstrapNav.Link href="#developers" className="nav-link-item">Developers</BootstrapNav.Link>
            <BootstrapNav.Link href="#pricing" className="nav-link-item">Pricing</BootstrapNav.Link>
          </BootstrapNav>
          
          <div className="nav-actions-group">
            <Form className="d-none d-xl-flex nav-search-form">
              <InputGroup className="search-input-group">
                <InputGroup.Text className="search-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  className="search-input"
                  aria-label="Search"
                />
              </InputGroup>
            </Form>

            <div className="nav-cta-group">
              {login === "Login" ? (
                <Link to="/login" className="btn-link-custom me-3 d-none d-lg-block">Log in</Link>
              ) : (
                <div className="user-profile-trigger">
                  <div className="avatar-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
              )}
              
            </div>

            
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;