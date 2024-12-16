<template>
  <div class="home">
    <div class="container mt-5 mb-5">
      <div class="row fila">
        <div class="col-lg-3 col-md-6 columna">
          <img src="../assets/libros.jpg" alt="Pila de libros" />
          <div>
            <h2 class="h5 mt-4">Descubrí libros</h2>
            <p>
              Circulá con la vista atenta, compartí con otros y enterate de
              nuevas reseñas.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 columna">
          <div>
            <h2 class="h5">Registrá tus favoritos</h2>
            <p>
              Usá nuestra app para tomar registro. ¡Rápido! No pierdas el
              nombre.
            </p>
            <img src="../assets/fav.jpg" alt="Icono fe favorito" class="mt-4" />

            <div
              class="btn btn-primary mt-4 animate__animated animate__headShake animate_delay-4s"
            >
              <router-link to="/formulario">Empieza a cargar</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 columna">
          <img src="../assets/metricas.jpg" alt="Vector con métricas" />
          <div>
            <h2 class="h5 mt-4">Navegá tu biblioteca</h2>
            <p>
              Volvé a revisar tus pendientes. ¡También podés registrar los
              terminados y ver métricas!
            </p>
          </div>
        </div>
      </div>
    </div>

    <h2 class="fs-3 mt-5">Los libros más leidos</h2>

    <div class="container mt-5">
      <div class="row">
        <div class="col-md-3 mb-4">
          <div class="card libro">
            <img
              src="../assets/libro4.jpg"
              class="card-img-top"
              alt="Portada del libro"
            />
            <div class="card-body">
              <h5 class="card-title">La clase de griego</h5>
              <p class="card-text">Autor: Han Kang</p>
              <p class="card-text">Género: Ficción</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img
              src="../assets/libro2.jpg"
              class="card-img-top"
              alt="Portada del libro"
            />
            <div class="card-body">
              <h5 class="card-title">La isla de la mujer dormida</h5>
              <p class="card-text">Autor: Arturo Pérez Reverte</p>
              <p class="card-text">Género: Ficción</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img
              src="../assets/libro3.jpg"
              class="card-img-top"
              alt="Portada del libro"
            />
            <div class="card-body">
              <h5 class="card-title">Nexus</h5>
              <p class="card-text">Autor: Yuval Noah Harari</p>
              <p class="card-text">Género: Historia general</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img
              src="../assets/libro5.jpg"
              class="card-img-top"
              alt="Portada del libro"
            />
            <div class="card-body">
              <h5 class="card-title">En agosto nos vemos</h5>
              <p class="card-text">Autor: Gabriel García Márquez</p>
              <p class="card-text">Género: Ficción</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
}
</script>
