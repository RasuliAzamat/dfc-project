<template>
  <div class="flex flex-col md:flex-row text-xs md:text-base whitespace-nowrap">
    <ProfileAdminActions class="basis-1/4 self-baseline" :actions="actions" :isIndex="isIndex" />
    <ProfileAdminViews class="basis-3/4" :actions="actions" :isIndex="isIndex" />
  </div>
</template>

<script setup>
const isIndex = inject('isIndex')

const actions = ref([
  {id: 1, name: 'Все заявки', component: 'ProfileAdminApplications', query: 'applications'},
  {id: 2, name: 'Все пользователи', component: 'ProfileAdminUsers', query: 'users'},
  {id: 3, name: 'Настройки аккаунта', component: 'ProfileAdminSettings', query: 'settings'},
  {id: 4, name: 'Выйти', component: '', query: 'quit'},
])
</script>

<style lang="scss" scoped></style>
