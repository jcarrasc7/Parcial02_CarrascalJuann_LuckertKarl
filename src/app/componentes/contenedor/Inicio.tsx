import { Cabecera } from "./Cabecera";

export const Inicio = () => {
  return (
    <div>
      <Cabecera />

      <div className="container pt-5 d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card text-center shadow-lg border-0 rounded-3">
            <div className="card-header bg-danger text-white">
              <h2>TIENDA DE ROPA EL PERA</h2>
            </div>
            <div className="card-body">
              <p className="card-text">
                Somos una marca excepcional. Importamos productos de alta calidad
                desde el exterior para traer lo mejor a nuestros clientes.
              </p>
              <button className="btn btn-danger mt-3" type="button">
                Explora nuestras ofertas
              </button>
            </div>
            <div className="card-footer text-muted">
              ¡Calidad garantizada en cada compra!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
