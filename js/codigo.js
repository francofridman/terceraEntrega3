let contenedor = document.querySelector('#partidazos');

fetch('js/tenistas.json')
  .then(res => res.json())
  .then(tenistas => {
    for (let tenista of tenistas) {
      contenedor.innerHTML += `
        <div id="emparejamientos"class="col-12 col-md-4 d-flex ">
          <div class="tarjeta-duelo w-100 text-light  rounded-3 px-3 py-4 d-flex flex-column justify-content-center align-items-center text-center border bg-black">
            <h3 class="titulo-duelo fw-bold text-info mb-2">${tenista.nombres}</h3>
            <p class="fst-italic mb-3">${tenista.descripcion}</p>
            <a class="btn border text-light fw-bold btn-emparejamiento" href="${tenista.destino}" target="_blank">Emparejamiento</a>
          </div>
        </div>
      `;
    }
  })