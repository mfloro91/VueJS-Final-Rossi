<template>
  <div class="form-libros d-flex">
    <div class="row">
      <div class="col-6">
        <img
          src="../assets/avatar.png"
          alt="Avatar bilbioteca"
          class="avatar"
        />
      </div>

      <div class="col-6 formTexto p-5">
        <p class="tituloForm">Escribí todos esos libros que querés leer:</p>
        <form @submit.prevent>
          <div class="mb-3">
            <label for="nombreLibro" class="form-label">Título libro</label>
            <input
              type="text"
              v-model="libro.titulo"
              class="form-control animate__animated animate__pulse"
              id="nombreLibro"
              aria-describedby="nombre"
            />
            <label for="autorLibro" class="form-label">Autor</label>
            <input
              type="text"
              v-model="libro.autor"
              class="form-control animate__animated animate__pulse"
              id="autorLibro"
              aria-describedby="autor"
            />
          </div>
          <div :class="verificar ? 'd-none' : 'd-block text-danger'">
            <p>Debés completar los campos para cargar un libro</p>
          </div>

          <p>Elige el género</p>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="genero"
              id="generoFantasia"
              value="Fantasia"
              v-model="libro.genero"
              checked
            />
            <label class="form-check-label" for="generoFantasia">
              Fantasía
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="genero"
              id="generoTerror"
              value="Terror"
              v-model="libro.genero"
            />
            <label class="form-check-label" for="generoTerror"> Terror </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="genero"
              value="Poesía"
              id="generoPoesia"
              v-model="libro.genero"
            />
            <label class="form-check-label" for="generoPoesia"> Poesía </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="genero"
              value="Novela"
              id="generoNovela"
              v-model="libro.genero"
            />
            <label class="form-check-label" for="generoNovela"> Novela </label>
          </div>
          <button
            @click.prevent="guardar(libro)"
            type="submit"
            class="btn btn-primary mt-4"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Formulario',
  data: function () {
    return {
      libro: {
        titulo: '',
        autor: '',
        genero: 'Fantasía',
      },
      lista: [],
      verificar: true,
      total: 0,
    }
  },
  methods: {
    guardar: function (libro) {
      if (libro.titulo == '' || libro.autor == '') {
        this.verificar = false
      } else {
        this.verificar = true
        let localData = localStorage.getItem('libros')
        this.lista = localData ? JSON.parse(localData) : []

        this.lista.push({
          titulo: libro.titulo,
          autor: libro.autor,
          genero: libro.genero,
          estado: 'Pendiente',
        })
        localStorage.setItem('libros', JSON.stringify(this.lista))

        this.libro = { titulo: '', autor: '', genero: 'Fantasía' }
        this.total = this.lista.length

        this.$router.push('/biblioteca')
      }
    },
  },
}
</script>

<style></style>
