import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AboutHero from "../../img/contacthero.webp";
import { MapPage } from "./contact-map/ContactMap";
import style from "./Contact.module.css";

export const Contact = () => {

  return (
    <>
      <Container>
        <Row className={style.content}>
          <Col className={style.information}>
            <div className={style.hero}>
              <img src={AboutHero} className={style.heroImage} />

              <div /* className="col-md-10" */ >
                <h4 className={style.title}>CONTATO</h4>
                <div className={style.description}>
                  <p /* className={style.description} */>Alameda Oscar Niemeyer 1033 sala 301 Vila da Serra Nova Lima</p>
                  <p /* className={style.description} */>Cep: 34.006-065</p>
                  <p /* className={style.description} */>revivaimoveisite@gmail.com</p>
                  <p /* className={style.description} */>+55 31 9972-0992</p>
                </div>
              </div>
            </div>
          </Col>
          <Col className={style.form}>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    className={style.inputForm}
                    type="name"
                    placeholder="Insira seu nome"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className={style.inputForm}
                    type="email"
                    placeholder="Isira seu email"
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    className={style.inputForm}
                    type="number"
                    placeholder="Insira seu telefone"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress">
                  <Form.Label>Endereço</Form.Label>
                  <Form.Control
                    className={style.inputForm}
                    type="text"
                    placeholder="Insira seu endereço"
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control
                    className={style.inputForm}
                    placeholder="Insira sua Cidade"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Estado</Form.Label>
                  <Form.Select
                    className={style.inputForm}
                    defaultValue="Selecione o Estado"
                  >
                    <option>Escolha...</option>
                    <option>MG</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>CEP</Form.Label>
                  <Form.Control
                    className={style.inputForm}
                    placeholder="Insira o CEP"
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridComment">
                <Form.Label>Assunto</Form.Label>
                <Form.Control
                  className={style.inputForm}
                  placeholder="Insira o assunto"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridMessage">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control
                  className={style.inputForm}
                  as="textarea"
                  rows={3}
                  placeholder="Deixe aqui sua mensagem"
                />
              </Form.Group>

              <Button
                className={style.btn}
                variant="primary"
                type="submit"
              >
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <MapPage  />
    </>
  );
}