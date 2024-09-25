<template>
  <div class="carousel-container">
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
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>

<style scoped>
.carousel-container {
  margin: 0;
  padding: 0;
  width: 100vw; /* Asegura que el contenedor ocupe todo el ancho de la ventana */
}

img {
  width: 100%;
  height: auto;
  object-fit: cover; /* Asegura que las imágenes llenen el contenedor sin distorsionarse */
}

.q-carousel-slide {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
