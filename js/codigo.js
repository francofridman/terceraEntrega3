let contenedor = document.querySelector('#partidazos');

fetch('js/tenistas.json')
  .then(res => res.json())
  .then(tenistas => {
    for (let tenista of tenistas) {
      contenedor.innerHTML += `
        <div class="col-12 col-md-4 d-flex">
          <div class="tarjeta-duelo w-100 rounded-3 p-4 d-flex flex-column justify-content-between align-items-start text-start">
            <div>
              <div class="icono-duelo mb-2">
                <i class="bi ${tenista.icono}"></i>
              </div>
              <div class="numero-duelo mb-3">${tenista.numero}</div>
              <h3 class="titulo-duelo fw-bold text-uppercase mb-2">${tenista.nombres}</h3>
              <p class="descripcion-duelo fst-italic mb-4">${tenista.descripcion}</p>
            </div>
            <a class="link-emparejamiento fw-bold text-uppercase text-decoration-none" href="${tenista.destino}" target="_blank">
              Emparejamiento <i class="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>
      `;
    }
  });