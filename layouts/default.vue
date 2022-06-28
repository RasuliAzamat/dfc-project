<template>
  <div class="app-container w-full p-4 lg:p-6 rounded-md">
    <GlobalHeader />

    <main class="min-h-screen pointer-events-auto">
      <slot />
    </main>

    <GlobalFooter class="mt-auto" />
  </div>
</template>

<script setup></script>

<style lang="postcss" scoped>
.app-container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
