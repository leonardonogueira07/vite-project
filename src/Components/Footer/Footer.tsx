import { Container, Nav, Row } from 'react-bootstrap';
import style from './Footer.module.css';
import Instagram from '../../assets/insta.webp';
import Facebook from '../../assets/face.webp';

export const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <Row justify-content-center>
          <div className={style.mediaSocial}>
            <a className="social-btn" href="https://www.instagram.com/reviva_imoveis/"><img
              src={Instagram} /></a>
            <a className="social-btn" href="https://www.facebook.com/reviva_imoveis"><img
              src={Facebook} /></a>
          </div>
          <div className={style.creator}>
            <div>©2021 por <a href="">Leonardo Nogueira</a></div>

          </div>
        </Row>
      </div>
    </>
  );
}