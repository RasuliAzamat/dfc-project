<template>
  <header class="app-container p-4 lg:p-6 mx-auto mb-10 md:mb-16 lg:mb-20 sticky top-0 left-0 right-0 bg-white">
    <nav class="flex items-center justify-between">
      <NuxtLink to="/" class="font-bold text-2xl md:text-3xl text-primary">
        Судимости<span class="text-dark">.нет</span>
      </NuxtLink>

      <ul class="hidden md:flex md:mt-2">
        <li v-for="{id, text, route} in navLinks" :key="id" class="mr-5 lg:mr-10 last:mr-0">
          <NuxtLink
            :to="route"
            class="border-b-2 border-b-transparent text-lg md:text-xl transition-all hover:border-b-primary"
          >
            {{ text }}
          </NuxtLink>
        </li>
      </ul>

      <div class="inline-block md:hidden mt-1">
        <MenuIcon
          v-if="!isMenuVisible"
          class="w-6 cursor-pointer text-dark"
          @click="isMenuVisible = !isMenuVisible"
        />
        <XIcon
          v-if="isMenuVisible"
          class="w-6 cursor-pointer text-dark"
          @click="isMenuVisible = !isMenuVisible"
        />
      </div>

      <div
        :class="[
          'absolute left-0 right-0 h-96 rounded-md flex items-center justify-center bg-white transition-all mobile-menu',
          {'opacity-100': isMenuVisible},
          {'top-10': isMenuVisible},
          {'z-50': isMenuVisible},
          {visible: isMenuVisible},
          {'pointer-events-auto': !isMenuVisible},
          {'opacity-0': !isMenuVisible},
          {'-top-full': !isMenuVisible},
          {'-z-50': !isMenuVisible},
          {'pointer-events-auto': !isMenuVisible},
          {invisible: !isMenuVisible},
        ]"
        style="box-shadow: 0px 15px 20px -20px rgba(0, 0, 0, 0.5)"
      >
        <ul class="flex flex-col items-center">
          <li v-for="{id, text, route} in navLinks" :key="id" class="mb-3 last:mb-0">
            <NuxtLink :to="route" @click="isMenuVisible = !isMenuVisible" class="text-2xl">
              {{ text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {MenuIcon, XIcon} from '@heroicons/vue/solid'

const isMenuVisible = ref(false)

const navLinks = ref([
  {id: Date.now(), text: 'О справке', route: '/'},
  {id: Date.now(), text: 'Оставить заявку', route: '/application'},
  {id: Date.now(), text: 'Профиль', route: '/profile'},
])
</script>

<style lang="scss" scoped></style>
