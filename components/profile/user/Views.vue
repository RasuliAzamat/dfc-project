<template>
  <component v-if="isIndex" :is="ProfileUserApplication"></component>
  <component v-else :is="components[component]"></component>
</template>

<script setup>
import ProfileUserApplication from './Appliction.vue'
import ProfileUserSettings from './Settings.vue'

const route = useRoute()

const isIndex = inject('isIndex')

const {actions} = defineProps({
  actions: {
    type: Array,
    required: true,
  },
})

const components = shallowRef({
  ProfileUserApplication,
  ProfileUserSettings,
})

const component = computed(() => {
  const action = actions.find(action => action.query === route.params.action)
  return action.component
})
</script>

<style lang="scss" scoped></style>
