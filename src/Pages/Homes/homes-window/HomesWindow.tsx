import { Button } from "react-bootstrap"


export const HomesWindow = () => {
  return (
    <>
      <div className="container">
        <div>
          <span>Apartamento - Belo Horizonte</span>
          <div>
            <Button variant="primary" type="submit" >
              Detalhes
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}