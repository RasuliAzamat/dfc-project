<template>
  <form action="/profile/edit" method="post">
    <h2 class="mb-5">Профиль пользователя</h2>
    <div class="mb-5">
      <label for="name">Ваше имя</label>
      <input type="text" name="name" id="name" placeholder="Имя" :value="user.name" />
    </div>
    <div class="mb-5">
      <label for="email">Ваш email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        :value="user.email"
        readonly
        class="read-only:focus:border-light bg-slate-200"
      />
    </div>
    <div class="mb-5">
      <label for="password">Ваш пароль</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Пароль"
        :value="user.password"
      />
    </div>
    <UiButton class="w-full mb-10">Сохранить изменения</UiButton>
  </form>
</template>

<script setup>
const user = shallowRef({
  id: 1,
  name: 'Пользователь',
  email: 'user@mail.com',
  password: 'пароль 001',
})
</script>

<style lang="postcss" scoped>
label {
  @apply block;
}
</style>
