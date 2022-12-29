import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/reviva.webp';
import Instagram from '../../assets/insta.webp';
import Facebook from '../../assets/face.webp';
/* import { Button } from 'react-bootstrap'; */
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';

export const Header = () => {
  return (
    <>
      <Navbar expand="lg" className={styles.header}>
        <Container fluid className={styles.container}>
          {/* <nav className="navbar py-3 py-lg-0 px-lg-5"> */}
          <Link className="navbar-logo" to='/'>
            <img src={Logo} />
          </Link>

          <Navbar.Toggle aria-controls="navToggle"/>
          <Navbar.Collapse id="navToggle" className={styles.link}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Sobre</Nav.Link>
            <Nav.Link href="/homes">Casas</Nav.Link>
            <Nav.Link href="/apartments">Apartamentos</Nav.Link>
            <Nav.Link href="/contact">Contato</Nav.Link>
          </Navbar.Collapse>
          <div className={styles.socialMedial}>
            <a className="social-btn" href="https://www.instagram.com/reviva_imoveis/"><img
              src={Instagram} /></a>
            <a className="social-btn" href="https://www.facebook.com/reviva_imoveis"><img
              src={Facebook} /></a>
          </div>
        </Container>
      </Navbar >
    </>
  );
}