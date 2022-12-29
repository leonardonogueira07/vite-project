import { Col, Container, Nav, Row } from 'react-bootstrap';
import AboutHero from '../../../img/about.png';
import style from './HomeAbout.module.css';

export const AboutHome = () => {

  return (
    <>
      <Container className={style.about}>
        <Row>
          <Col className={style.columnContent}>
            <h4 className={style.aboutTitle}>Sobre</h4>
            <p className={style.subTitle}>“Somos especializados no atendimento individualizado e
              qualificado ao cliente, na
              busca pelo imóvel ideal,
              traçando de forma didática e completa seu perfil”.
            </p>
            <Nav.Link href="" className={style.aboutContact}>Para saber mais clique aqui</Nav.Link>
          </Col>
          <Col className={style.columnImage}>
            <img src={AboutHero} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
}