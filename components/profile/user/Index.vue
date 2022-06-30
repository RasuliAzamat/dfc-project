<template>
  <div class="flex flex-col md:flex-row text-xs md:text-base whitespace-nowrap">
    <ProfileUserActions class="basis-1/4 md:self-baseline" :actions="actions" :isIndex="isIndex" />
    <ProfileUserViews class="basis-3/4" :actions="actions" :isIndex="isIndex" />
  </div>
</template>

<script setup>
const isIndex = inject('isIndex')

const actions = ref([
  {id: 1, name: 'Статус заявки', component: 'ProfileUserApplication', query: 'application'},
  {id: 2, name: 'Настройки аккаунта', component: 'ProfileUserSettings', query: 'settings'},
  {id: 3, name: 'Выйти', component: '', query: 'quit'},
])
</script>

<style lang="scss" scoped></style>
