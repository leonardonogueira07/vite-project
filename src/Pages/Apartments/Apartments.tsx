import { Button, Container, Form, Row } from "react-bootstrap"
import style from './Apartments.module.css';
import HeroHomes from '../../img/homes.png';

export const Apartments = () => {
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
        </div>
      </div>
    </>
  )
}