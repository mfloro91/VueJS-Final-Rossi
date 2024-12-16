<template>
  <h2 v-show="local.length > 0">Algunas de tus métricas:</h2>

  <div>
    <img src="../assets/metricas.jpg" alt="Vector con métricas" class="imgMetricas" v-show="local.length > 0" />

    <div class="mt-4 metricas" v-show="local.length > 0">
      <div class="d-flex">
        <div class="col-6">
          <h3>Total de libros en tu biblioteca</h3>
          <p class="h4">{{ this.local.length }}</p>
        </div>
        <div class="col-6">
          <h3>Total de libros terminados</h3>
          <p class="h4">{{ this.librosTerminados.length }}</p>
        </div>
      </div>
      <div class="col-12 avance" v-show="(this.librosTerminados.length * 100) / this.local.length > 10">
        <h3>Porcentaje de avance:</h3>
        <p class="h4">
          Ya leíste el
          {{ ((this.librosTerminados.length * 100) / this.local.length).toFixed(2) }}% de tu
          lista
        </p>
      </div>
    </div>

    <div v-show="local.length == 0">
      <p class="badge rounded-pill text-bg-primary fs-6 d-block">
        Aún no tienes libros guardados
      </p>
      <img v-show="local.length == 0" src="../assets/data.png" class="data" alt="Cartel de error" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BibliotecaView',
  data: function () {
    return {
      local: [],
      librosTerminados: [],
    }
  },
  mounted: function () {
    this.traerLocal()
  },
  methods: {
    traerLocal: function () {
      if (localStorage.libros) {
        this.local = JSON.parse(localStorage.getItem('libros'))
        this.librosTerminados = this.local.filter(
          libro => libro.estado === 'Terminado',
        )
      }
    },
  },
}
</script>

<style></style>
