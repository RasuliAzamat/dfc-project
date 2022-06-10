<template>
  <header class="mb-10">
    <nav class="flex items-center justify-between relative">
      <NuxtLink to="/" class="font-bold text-2xl md:text-3xl text-sky-500">
        Судимости<span class="text-slate-900">.нет</span>
      </NuxtLink>

      <ul class="hidden md:flex md:mt-2">
        <li v-for="{id, text, route} in navLinks" :key="id" class="mr-5 lg:mr-10 last:mr-0">
          <NuxtLink
            :to="route"
            class="border-b-2 border-b-transparent text-lg md:text-xl transition-all hover:border-b-sky-500"
          >
            {{ text }}
          </NuxtLink>
        </li>
      </ul>

      <div class="inline-block md:hidden mt-1">
        <MenuIcon
          class="w-6 cursor-pointer text-slate-900"
          @click="isMenuVisible = !isMenuVisible"
        />
      </div>

      <div
        :class="[
          'absolute left-0 right-0 min-h-screen flex items-center justify-center bg-white transition-all mobile-menu',
          {'opacity-100': isMenuVisible},
          {'top-8': isMenuVisible},
          {'z-50': isMenuVisible},
          {'visible': isMenuVisible},
          {'pointer-events-auto': !isMenuVisible},
          {'opacity-0': !isMenuVisible},
          {'-top-full': !isMenuVisible},
          {'-z-50': !isMenuVisible},
          {'pointer-events-auto': !isMenuVisible},
          {'invisible': !isMenuVisible},
        ]"
      >
        <ul class="flex flex-col items-center -mt-96">
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
import {MenuIcon} from '@heroicons/vue/solid'

const isMenuVisible = ref(false)

const navLinks = ref([
  {id: Date.now(), text: 'О справке', route: '/'},
  {id: Date.now(), text: 'Оставить заявку', route: '/application'},
  {id: Date.now(), text: 'Профиль', route: '/profile'},
])
</script>

<style lang="scss" scoped></style>
