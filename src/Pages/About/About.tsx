import { Container, Row, Col } from "react-bootstrap";
import AboutHero from "../../img/heroAbout.png";
import style from "./About.module.css";

export const About = () => {
  return (
    <>
      <Container>
        <Row className={style.content}>
          <Col className={style.information}>
            <h4 className={style.title}>Sobre</h4>
            <div className="col-md-10">
              <div>
                <p className={style.description}>
                  A Reviva é uma embrsa que nasce com larga experiência no mercado de imóveis de luxo.
                  Sua proprietária, advogada de formação e consultora imobiliária por paixão, atua desde 2001 no mercado
                  Imobiliário de Belo Horizonte.<br />
                  Renata Jorge se estabelece no mercado com o intuito de dar consultoria e gestão em imóveis na grande BH,
                  São
                  Paulo, Rio de Janeiro, Bahia, balneários e demais regiões do Brasil.
                  <br />Dedicação e empenho em dar o melhor suporte na escolha do imóvel que atenda às necessidades do
                  cliente-investidor, bem como ao adquirente particular.<br /><br />
                  “Nossa missão é tornar a vida do nosso brcioso e especial cliente mais segura e divertida, acrescentando
                  pitadas de extremo conforto e bom gosto.<br />
                  Aliado a tudo isso, Renata busca oportunidades incríveis para o seu negócio.
                  Unimos esse propósito pautado pela ética, agilidade, competência e eficiência, seguindo todas as
                  diretrizes
                  legais.
                </p>
              </div>
            </div>
          </Col>
          <Col className={style.hero}>
            <div className="">
              <img src={AboutHero} className={style.heroImage} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}