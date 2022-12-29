import style from './HomeWorks.module.css';
import work1 from '../../../img/01.png';
import work2 from '../../../img/01.png';
import work3 from '../../../img/01.png';
import Hero from '../../../img/hero.webp';

export const HomeWorks = () => {
  return (
    <>
      <div className={style.aboutService}>
        <div className={style.hero}>
          <img src={Hero} className={style.overlay} />
        </div>
        <div className={style.content}>
          <div className="row justify-content-center">
            <div className="content-border"></div>
            <div className="col-md-3">
              <img className="img-fluid" src={work1} alt="" />
            </div>
            <div className="col-md-3 align-self-center">
              <h6 className={style.work1}>"Estudo do Perfil completo na escolha do
                imóvel"</h6>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 align-self-center">
              <h6 className={style.work1}>"Planejamento e assessoria Imobiliária"
              </h6>
            </div>
            <div className="col-md-3 p-2">
              <img className="img-fluid" src={work2} alt="" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <img className="img-fluid" src={work3} alt="" />
            </div>
            <div className="col-md-3 align-self-center">
              <h6 className={style.work1}>"Acompanhamento do processo de compra do imóvel até o final com a
                Escritura e do Registro"
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}