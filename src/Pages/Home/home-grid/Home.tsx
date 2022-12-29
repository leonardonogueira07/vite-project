import styles from './Home.module.css';
import Hero from '../../../img/hero.webp';
import Hero1 from '../../../img/hero01.png';
import Seta from '../../../assets/set.svg';
import { Col, Container, Row } from 'react-bootstrap';
import {
  AboutHome,
  HomeWorks,
  HomeDepoiment,
} from '../index';

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div>
          <div className={styles.hero}>
            <img src={Hero} className={styles.overlay} />
          </div>
        </div>
        <div className={styles.seta} /* md={{ span: 2, offset: 0 }} */>
          <img src={Seta} />
        </div>
        <div className={styles.hero1}>
          <h1>
            Imóveis de luxo para quem sonha alto.
          </h1>
          <img src={Hero1} />
        </div>
      </div>
      <AboutHome />
      <HomeWorks />
      <HomeDepoiment />
    </>
  );
}


