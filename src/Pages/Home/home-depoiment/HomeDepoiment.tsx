import { Alert, Col, Container } from 'react-bootstrap';
import style from './HomeDepoiment.module.css';

export const HomeDepoiment = () => {
  return (
    <>
      <Container className={style.homeDepoiment} >
        <Alert variant="success" className={style.depoiment}>
          <p className="text-lg-center">
            Realizei alguns negócios com a Renata e ela sempre se mostrou muito atenciosa e
            dinâmica. As nossas negociações sempre correram tranquilamente muito bem. Indico para
            quem procura um profissional de alta qualidade e performance.</p>
          <p className={style.textClient}>Marco Túlio - Jota Quest
          </p>
        </Alert>
        <Alert variant="success" className={style.depoimentOne}>
          <p className="text-lg-center">
            Renata me surpreendeu com sua eficiência e competência, atendeu todas as minhas
            expectativas.</p>
          <p className={style.textClient}>Denize e Antônio Rezende - Localiza</p>
        </Alert>
        <Alert variant="success" className={style.depoiment}>
          <p className="text-lg-center">
            Resolvi disponibilizar minha cobertura a venda para pouquíssimos profissionais da
            área... A Renata prospectou o comprador certo, na primeira visita já evoluímos e no
            segundo encontro concluímos o negócio! Parabéns a ela pela percepção, conexão e
            conclusão do negócio.</p>
          <p className={style.textClient}>Rodrigo Pentagna</p>
        </Alert>
      </Container>
    </>
  );
}