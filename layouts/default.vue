<template>
    <div>
        <GlobalHeader />

        <main class="app-container min-h-screen px-4 lg:px-6 mx-auto pointer-events-auto">
            <slot />
        </main>

        <GlobalFooter />
    </div>
</template>

<script setup></script>

<style lang="postcss" scoped></style>
