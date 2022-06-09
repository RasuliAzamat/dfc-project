<template>
  <div class="flex flex-col p-4 lg:p-8 main-content">
    <div class="app-container w-full p-4 lg:p-6 shadow-2xl rounded-md bg-white">
      <GlobalTheHeader />

      <main class="min-h-screen pointer-events-auto">
        <slot />
      </main>

      <GlobalTheFooter class="mt-auto" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="postcss" scoped>
.app-container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
