<template>
  <div class="page-wrapper">
    <!-- Carrusel continuo arriba de la barra azul -->
    <div class="carousel-container">
      <div class="image-track">
        <!-- Repetimos las imágenes para garantizar un desplazamiento continuo sin reinicios -->
        <img src="images/4.png" alt="Imagen 1" />
        <img src="images/5.png" alt="Imagen 2" />
        <img src="images/4.png" alt="Imagen 3" />
        <img src="images/6.png" alt="Imagen 4" />
        <img src="images/4.png" alt="Imagen 5" />
        <img src="images/7.jpg" alt="Imagen 6" />
        <img src="images/4.png" alt="Imagen 7" />
        <img src="images/4.png" alt="Imagen 8" />
        <img src="images/4.png" alt="Imagen 9" />
        <img src="images/4.png" alt="Imagen 10" />
        <!-- Duplicamos las imágenes -->
        <img src="images/4.png" alt="Imagen 1" />
        <img src="images/5.png" alt="Imagen 2" />
        <img src="images/4.png" alt="Imagen 3" />
        <img src="images/6.png" alt="Imagen 4" />
        <img src="images/4.png" alt="Imagen 5" />
        <img src="images/7.jpg" alt="Imagen 6" />
        <img src="images/4.png" alt="Imagen 7" />
        <img src="images/4.png" alt="Imagen 8" />
        <img src="images/4.png" alt="Imagen 9" />
        <img src="images/4.png" alt="Imagen 10" />
      </div>
    </div>

    <!-- Barra azul -->
    <div class="blue-bar">
      <img src="images/logo.png" alt="Logo" class="logo" />
      <!-- Botones a la derecha -->
      <div class="nav-buttons">
        <!-- Icono de carrito de compras -->
        <i class="fas fa-shopping-cart nav-icon"></i>
        <!-- Icono de lupa de búsqueda -->
        <i class="fas fa-search nav-icon"></i>
        <button @click="goToHome" class="nav-button">INICIO</button>
        <button @click="goToSucursales" class="nav-button">SUCURSALES</button>
      </div>
    </div>

    <!-- Carrusel grande debajo de la barra azul -->
    <div class="carousel-container-large">
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        height="auto"
        autoplay="5000"
      >
        <q-carousel-slide :name="1">
          <img src="images/1.png" alt="Imagen 1" />
        </q-carousel-slide>
        <q-carousel-slide :name="2">
          <img src="images/1.png" alt="Imagen 2" />
        </q-carousel-slide>
        <q-carousel-slide :name="3">
          <img src="images/1.png" alt="Imagen 3" />
        </q-carousel-slide>
        <q-carousel-slide :name="4">
          <img src="images/1.png" alt="Imagen 4" />
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const slide = ref(1)

    const goToHome = () => {
      // Acción para el botón INICIO
      alert('Navegando a INICIO')
    }

    const goToSucursales = () => {
      // Acción para el botón SUCURSALES
      alert('Navegando a SUCURSALES')
    }

    return {
      slide,
      goToHome,
      goToSucursales
    }
  }
}
</script>

<style scoped>
/* Estilos para el carrusel continuo */
.carousel-container {
  width: 100vw;
  height: auto;
  overflow: hidden;
  position: relative;
  margin: 0;
  padding: 0;
  line-height: 0;
}

.image-track {
  display: flex;
  animation: scroll-left 50s linear infinite;
}

.image-track img {
  width: 7%;
  height: auto;
  object-fit: contain;
  margin-right: 125px;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-75%); }
}

/* Estilos para la barra azul */
.blue-bar {
  background-color: #007bff;
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Distribuye logo a la izquierda y botones a la derecha */
}

.blue-bar .logo {
  width: 100px;
  height: auto;
  margin-right: 20px;
}

.nav-buttons {
  display: flex;
  align-items: center;
}

.nav-button {
  background-color: white;
  color: #007bff;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
}

.nav-button:hover {
  background-color: #0056b3;
  color: white;
}

/* Estilo para los íconos de carrito y lupa */
.nav-icon {
  color: white;
  font-size: 20px;
  margin-right: 15px;
  cursor: pointer;
}

.nav-icon:hover {
  color: #0056b3;
}

/* Estilos para el carrusel grande */
.carousel-container-large {
  margin: 0;
  padding: 0;
  width: 100vw;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.q-carousel-slide {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Asegúrate de que no haya espacio entre los elementos */
.page-wrapper {
  display: flex;
  flex-direction: column;
}

/* Eliminamos cualquier espacio entre elementos */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
