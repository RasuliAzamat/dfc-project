<template>
  <component v-if="isIndex" :is="ProfileAdminApplications"></component>
  <component v-else :is="components[component]"></component>
</template>

<script setup>
import ProfileAdminApplications from './Applications.vue'
import ProfileAdminUsers from './Users.vue'
import ProfileAdminSettings from './Settings.vue'

const route = useRoute()

const isIndex = inject('isIndex')

const {actions} = defineProps({
  actions: {
    type: Array,
    required: true,
  },
})

const components = shallowRef({
  ProfileAdminApplications,
  ProfileAdminUsers,
  ProfileAdminSettings,
})

const component = computed(() => {
  const action = actions.find(action => action.query === route.params.action)
  return action.component
})
</script>

<style lang="scss" scoped></style>
