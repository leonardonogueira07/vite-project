import { Button, Container, Form, Row } from "react-bootstrap"
import style from './Homes.module.css';
import HeroHomes from '../../img/homes.png';
import { useState } from "react";
import ServImg from '../../img/reviva.png';

export const Homes = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  return (
    <>
      <div className={style.content}>

        <div className={style.heroImageOver}>
          <img src={HeroHomes} className={style.heroImage} />
        </div>

        <div className={style.formContent}>
          <div className={style.formTitle}>
            <h2>Pesquisar</h2>
          </div>

          <div >
            <Form className={style.form}>
              <Form.Group className="col-md-3 p-3">
                <Form.Select id="disabledSelect" className={style.text}>
                  <option>Selecione a cidade</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="col-md-3 p-3">
                <Form.Select id="disabledSelect" className={style.text}>
                  <option>Escolha o tipo</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="col-md-3 p-3">
                <Form.Select id="disabledSelect" className={style.text}>
                  <option>Venda</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="col-md-3 p-3">
                <Form.Select id="disabledSelect" className={style.text}>
                  <option>Selecione a o bairro</option>
                </Form.Select>
              </Form.Group>
            </Form>
            <div className="col-md-4 p-3">
              <Button variant="primary" type="submit" className={style.button}>
                Pesquisar
              </Button>
            </div>

          </div>
        </div >

        {isLoad === false && (
          <div className={style.information}>
            <div className="d-flex">
              <div className="col-md-4 p-4">
                <div className="p-inputgroup">
                  <div className={style.group}>
                    <div>
                      <div className={style.infoTitle}>Venda</div>
                      <div className={style.infoTitle}>R$2,100.00</div>
                      <div className={style.infoTitle}><hr /></div>
                      <div className={style.infoTitle}>Bairro: Lourdes</div>
                      <div className={style.infoTitle}>Categoria: Apartamento</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 p-4">
                <div className="p-inputgroup">
                  <div className={style.groupimg}>
                    <div>
                      <img src={ServImg} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 p-4">
                <div className="p-inputgroup">
                  <div className={style.group}>
                    <div>
                      <div className={style.infoTitle}>Cod: 42</div>
                      <div className={style.infoTitle}><hr /></div>
                      <div className={style.infoTitle}>110.69 m²</div>
                      <div className={style.infoTitle}>2 dormitórios</div>
                      <div className={style.infoTitle}>1 suítes</div>
                      <div className={style.infoTitle}>0 vagas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.buttonresult}>
              <Button variant="primary" type="submit" >
                Detalhes
              </Button>
            </div>
          </div>)} : {(
            <div>
              Load
            </div>
          )}

      </div >
    </>
  );
}