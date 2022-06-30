<template>
  <ul class="flex justify-between mb-10 md:mb-0 md:flex-col">
    <li
      v-for="{id, name, query} in actions"
      :key="id"
      class="sm:text-base md:text-lg md:mb-4 md:last:mb-0 text"
    >
      <NuxtLink
        v-if="query === 'application'"
        :to="`/profile/${query}`"
        :class="{isIndex: isIndex === true}"
      >
        {{ name }}
      </NuxtLink>

      <NuxtLink v-else :to="`/profile/${query}`">
        {{ name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const isIndex = inject('isIndex')

const {actions} = defineProps({
  actions: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="postcss" scoped>
a {
  @apply text-inherit;
}
a.active {
  @apply text-primary;
}
a.isIndex {
  @apply text-primary;
}
</style>
