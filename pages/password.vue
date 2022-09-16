<template>
    <section>
        <div class="flex flex-col md:flex-row items-center justify-between -mt-20 lg:-mt-40">">
            <div class="w-full md:basis-1/2 lg:basis-3/5">
                <IllustrationsSignIn />
            </div>
            <div class="w-full md:basis-1/2 lg:basis-2/5">
                <form action="/password" method="post">
                    <h2 class="mb-10">Новый пароль</h2>
                    <div class="mb-5">
                        <label for="password">Новый пароль</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Пароль"
                            v-model="passwordValue"
                        />
                        <small v-if="passwordError">{{ passwordError }}</small>
                    </div>
                    <div class="mb-5">
                        <label for="confirm">Подтвердите пароль</label>
                        <input
                            type="password"
                            name="confirm"
                            id="confirm"
                            placeholder="Пароль"
                            v-model="confirmValue"
                        />
                        <small v-if="confirmError">{{ confirmError }}</small>
                    </div>
                    <div class="mb-5 text-right">
                        <NuxtLink to="/login" class="underline text-primary">Вернуться к входу</NuxtLink>
                    </div>
                    <UiButton class="w-full">Сохранить</UiButton>
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
