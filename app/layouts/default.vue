<template>
  <div class="min-h-screen bg-custom-light dark:bg-custom-dark transition-colors duration-300">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Default layout with navbar and footer
</script>
