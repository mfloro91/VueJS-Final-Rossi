<template>
  <h2 v-show="local.length > 0">Libros en tu lista:</h2>

  <div class="librosContainer justify-content-center">
    <transition-group
      leave-active-class="animate__animated animate__fadeOut animate__faster "
    >
      <div v-for="(libro, index) in local" v-bind:key="index">
        <div class="card libros" style="width: 18rem">
          <div
            v-bind:class="{
              'card-body': libro.estado == 'Pendiente',
              'card-checked': libro.estado !== 'Pendiente',
            }"
          >
            <img
              v-if="libro.estado == 'Pendiente'"
              src="../assets/check-circle.svg"
              class="unchecked"
              alt="icono de check"
              v-on:click="cambiarEstado(index)"
            />
            <img
              v-else
              src="../assets/check-circle-fill.svg"
              class="checked"
              alt="icono de check"
              v-on:click="cambiarEstado(index)"
            />
            <img
              v-if="libro.genero == 'Novela'"
              src="../assets/novela.png"
              class="card-img-top"
              alt="Imagen de un libro rojo"
            />
            <img
              v-else-if="libro.genero == 'Poesía'"
              src="../assets/poesia.png"
              class="card-img-top"
              alt="Imagen de un libro rojo"
            />
            <img
              v-else-if="libro.genero == 'Terror'"
              src="../assets/terror.png"
              class="card-img-top"
              alt="Imagen de un libro rojo"
            />
            <img
              v-else
              src="../assets/fantasia.png"
              class="card-img-top"
              alt="Imagen de un libro rojo"
            />
            <div class="card-body">
              <h3 class="card-title">
                {{ capitalizarPrimeraLetra(libro.titulo) }}
              </h3>
              <p class="card-text h6">
                {{ capitalizarPrimeraLetra(libro.autor) }}
              </p>
              <div>
                <p class="card-text">{{ libro.genero }}</p>
                <p class="card-text">{{ libro.estado }}</p>
              </div>
              <button
                v-if="sumarTerminadas >= 1"
                @click="borrar(index), sumarTerminadas--"
                v-bind:class="
                  libro.estado == 'Pendiente'
                    ? 'btn btn-primary'
                    : 'btn btn-success'
                "
              >
                Borrar
              </button>
              <button
                v-else
                @click="borrar(index)"
                v-bind:class="
                  libro.estado == 'Pendiente'
                    ? 'btn btn-primary'
                    : 'btn btn-success'
                "
              >
                Borrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition-group>

    <div v-show="local.length == 0">
      <p class="badge rounded-pill text-bg-primary fs-6 d-block">
        Aún no tienes libros guardados
      </p>
      <img
        v-show="local.length == 0"
        src="../assets/data.png"
        class="data"
        alt="Cartel de error"
      />
    </div>
  </div>

  <div class="mt-4 mb-4 carga" v-show="local.length > 0">
    <button @click="eliminarLS" class="btn btn-primary m-4">
      Eliminar todos
    </button>
    <div class="btn btn-primary">
      <router-link to="/formulario">Cargar más libros</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Biblioteca',
  data: function () {
    return {
      local: [],
      sumarTerminadas: 0,
    }
  },
  mounted: function () {
    this.traerLocal()
  },
  methods: {
    traerLocal: function () {
      if (localStorage.libros) {
        this.local = JSON.parse(localStorage.getItem('libros'))
      }
    },
    borrar: function (index) {
      this.local.splice(index, 1)
      localStorage.setItem('libros', JSON.stringify(this.local))
    },
    eliminarLS: function () {
      localStorage.clear()
      this.local = []
    },
    cambiarEstado(index) {
      if (this.local[index].estado == 'Pendiente') {
        this.sumarTerminadas++
        this.local[index].estado = 'Terminado'
        localStorage.setItem('terminados', JSON.stringify(this.local))
      } else {
        this.sumarTerminadas--
        this.local[index].estado = 'Pendiente'
      }
      localStorage.setItem('libros', JSON.stringify(this.local))
    },
    capitalizarPrimeraLetra(palabra) {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1)
    },
  },
}
</script>

<style></style>
