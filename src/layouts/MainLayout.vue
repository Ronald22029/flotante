<template>
  <q-layout view="hHh lpR fFf">
    <!-- Contenedor de la página -->
    <q-page-container>
      <router-view /> <!-- Aquí se renderizan las páginas específicas -->
    </q-page-container>

    <!-- Pie de página (opcional, puedes eliminarlo si no lo necesitas) -->
    <q-footer class="bg-primary text-white">
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  methods: {
    goToPage (page) {
      this.$router.push(page)
    }
  }
}
</script>

<style scoped>
/* Estilos personalizados */
</style>
