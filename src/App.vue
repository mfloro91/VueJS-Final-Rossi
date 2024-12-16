<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'App',
}
</script>

<template>
  <div class="texto-centrado">
    <div id="app">
      <div class="navbar">
        <ul class="container-fluid">
          <li>
            <router-link to="/">
              <img
                src="./assets/logo.ico"
                alt="Logo"
                width="30"
                height="24"
                class="d-inline-block align-text-top"
              />
              Home</router-link
            >
          </li>
          <li><router-link to="/formulario">Formulario</router-link></li>
          <li><router-link to="/biblioteca">Biblioteca</router-link></li>
          <li><router-link to="/metricas">Métricas</router-link></li>
        </ul>
      </div>

      <h1 v-once class="mt-4">BiblioApp</h1>
      <p v-once>Guardá tus libros pendientes antes de perderles el rastro</p>

      <router-view />

      <footer>
        <div>
          <div>
            <div class="mt-3 mb-3">
              <h2>María Florencia Rossi</h2>
              <p>maria.rossi@davinci.edu.ar</p>
              <div>
                <a
                  href="https://www.linkedin.com/in/mar%C3%ADa-florencia-rossi/"
                  target="_blank"
                  class="text-black"
                >
                  <img src="./assets/linkedin.svg" alt="Icono de Linkedin" />
                </a>
                <a
                  href="https://www.behance.net/flor-rossi"
                  target="_blank"
                  class="text-black"
                >
                  <img src="./assets/behance.svg" alt="Icono de Behance" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style></style>
