<template>
    <section>
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="w-full md:basis-1/2 lg:basis-3/5">
                <IllustrationsSignIn />
            </div>
            <div class="w-full md:basis-1/2 lg:basis-2/5">
                <form action="/signup" method="post">
                    <h2 class="mb-10">Регистрирация</h2>
                    <div class="mb-5">
                        <label for="name">Введите имя</label>
                        <input type="text" name="name" id="name" placeholder="Имя" v-model="nameValue" />
                        <small v-if="nameError">{{ nameError }}</small>
                    </div>
                    <div class="mb-5">
                        <label for="email">Введите email</label>
                        <input type="email" name="email" id="email" placeholder="Email" v-model="emailValue" />
                        <small v-if="emailError">{{ emailError }}</small>
                    </div>
                    <div class="mb-5">
                        <label for="password">Введите пароль</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Пароль"
                            v-model="passwordValue"
                        />
                        <small v-if="passwordError">{{ passwordError }}</small>
                    </div>
                    <UiButton class="w-full mb-10">Зарегистрироваться</UiButton>
                    <div class="text-center">
                        <p>
                            У вас есть учетная записы?
                            <NuxtLink to="/signin" class="underline text-primary">Вход</NuxtLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style lang="postcss" scoped>
small {
    @apply block text-red-500;
}
</style>
