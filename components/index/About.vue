<template>
  <section>
    <h1 class="mb-10 text-center">О справке</h1>

    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="w-full md:basis-1/2 md:mr-5 lg:mr-0 mb-5 md:mb-0">
        <IllustrationsFillOut />
      </div>
      <div class="w-full md:basis-1/2 lg:basis-1/3">
        <h2 class="mb-5 md:mb-7">Что за справка?</h2>
        <p class="mb-3 md:mb-5">
          <strong>Справка об отсутствии <i>(наличии)</i> судимости</strong> — докумен
          <i>(справка)</i>, который подтверждает отсутствие <i>(наличие)</i> судимости гражданина.
          Данный документ может потребоваться:
        </p>
        <ul>
          <li
            v-for="{id, text} in requirePlaces"
            :key="id"
            class="flex items-center mb-2 md:mb-4 last:mb-0"
          >
            <span class="inline-block mr-1 md:mr-3">
              <ChevronDoubleRightIcon class="w-6 text-dark" />
            </span>
            {{ text }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ChevronDoubleRightIcon} from '@heroicons/vue/solid'
import {IllustrationsFillOut} from '../../.nuxt/components'

const requirePlaces = ref([
  {
    id: Date.now(),
    text: 'для трудоустройства или получения лицензии в некоторых сферах деятельности (госслужба, медицина, педагогика, операции с ценными бумагами)',
  },
  {id: Date.now(), text: 'для получения вида на жительство или иностранного гражданства'},
  {id: Date.now(), text: 'для разрешения на оружие'},
  {id: Date.now(), text: 'а также для усыновления, удочерения детей'},
])
</script>

<style lang="css" scoped></style>
