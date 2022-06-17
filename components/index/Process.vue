<template>
  <section>
    <h1 class="mb-10 text-center">Как получить?</h1>

    <div class="flex flex-col-reverse md:flex-row items-center justify-between">
      <div class="w-full md:basis-1/2 lg:basis-1/3 md:mr-5 lg:mr-0">
        <h2 class="mb-5 md:mb-8">Процесс выглядит так:</h2>
        <ul>
          <li
            v-for="{id, order, title, description} in process"
            :key="id"
            class="flex mb-3 md:mb-6 last:mb-0"
          >
            <span class="text-4xl lg:text-5xl mr-3 md:mr-6 font-bold text-primary">
              {{ order }}
            </span>
            <span>
              <strong class="block">{{ title }}</strong>
              <small>{{ description }}</small>
            </span>
          </li>
        </ul>
      </div>
      <div class="w-full md:basis-1/2 mb-5 md:mb-0">
        <IllustrationsProcess />
      </div>
    </div>
  </section>
</template>

<script setup>
const process = ref([
  {
    id: Date.now(),
    order: 1,
    title: 'Оплата справки в банке',
    description:
      'Оплату можно воспроизвести в Амонатбонке и далее с чеком подойти в районный МВД. Также, при оплате нужно уточнить срочность получения',
  },
  {
    id: Date.now(),
    order: 2,
    title: 'Заполнить анкеты в МВД',
    description:
      'В МВД вашего района нужно предъявить чек и далее заполнить анкету. Образец можно посмотреть тут',
  },
  {
    id: Date.now(),
    order: 3,
    title: 'Дополнительные уточнения',
    description:
      'К дополнительным опциям можно отнести следущее: справка по договоренности; язык документа',
  },
])
</script>

<style lang="css" scoped></style>
