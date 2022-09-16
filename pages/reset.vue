<template>
    <section>
        <div class="flex flex-col md:flex-row items-center justify-between -mt-20 lg:-mt-40">">
            <div class="w-full md:basis-1/2 lg:basis-3/5">
                <IllustrationsSignIn />
            </div>
            <div class="w-full md:basis-1/2 lg:basis-2/5">
                <form action="/reset" method="post">
                    <h2 class="mb-10">Сброс пароля</h2>
                    <div class="mb-5">
                        <label for="email">Введите свой email адрес для восстановления пароля</label>
                        <input type="email" name="email" id="email" placeholder="Email" v-model="emailValue" />
                        <small v-if="emailError">{{ emailError }}</small>
                    </div>
                    <div class="mb-5 text-right">
                        <NuxtLink to="/login" class="underline text-primary">Вернуться к входу</NuxtLink>
                    </div>
                    <UiButton class="w-full">Сбросить</UiButton>
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
