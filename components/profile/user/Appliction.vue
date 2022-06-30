<template>
  <div>
    <div v-if="applicаtions.length">
      <table
        class="w-full flex md:hidden pt-5 mb-10 last:mb-0 border-t-2 border-t-black mobile"
        v-for="{id, date, status, addressed, urgency} in applicаtions"
        :key="id"
      >
        <thead class="basis-1/2">
          <tr class="flex flex-col text-left">
            <th>Номер заявки</th>
            <th>Дата</th>
            <th>На имя</th>
            <th>Статус</th>
            <th>Срочность</th>
          </tr>
        </thead>
        <tbody v-if="applicаtions.length" class="basis-1/2">
          <tr class="flex flex-col">
            <td>№ {{ id }}</td>
            <td>{{ date }}</td>
            <td>{{ addressed }}</td>
            <td>{{ status }}</td>
            <td>{{ urgency }}</td>
          </tr>
        </tbody>
        <tbody v-else class="basis-1/2">
          <tr class="flex flex-col">
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
          </tr>
        </tbody>
      </table>
      <table class="desctop hidden md:table w-full">
        <thead class="border-b-2 border-b-black">
          <tr class="text-left">
            <th>Номер заявки</th>
            <th>Дата</th>
            <th>На имя</th>
            <th>Статус</th>
            <th>Срочность</th>
          </tr>
        </thead>
        <tbody v-if="applicаtions.length">
          <tr
            v-for="{id, date, status, addressed, urgency} in applicаtions"
            :key="id"
            class="odd:bg-slate-100"
          >
            <td>№ {{ id }}</td>
            <td>{{ date }}</td>
            <td>{{ addressed }}</td>
            <td>{{ status }}</td>
            <td>{{ urgency }}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td>у вас пока нет заказов</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <table class="w-full flex md:hidden pt-5 mb-10 last:mb-0 border-t-2 border-t-black mobile">
        <thead class="basis-1/2">
          <tr class="flex flex-col text-left">
            <th>Номер заявки</th>
            <th>Дата</th>
            <th>На имя</th>
            <th>Статус</th>
            <th>Срочность</th>
          </tr>
        </thead>
        <tbody class="basis-1/2">
          <tr class="flex flex-col">
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
          </tr>
        </tbody>
      </table>

      <table class="desctop hidden md:table w-full">
        <thead class="border-b-2 border-b-black">
          <tr class="text-left">
            <th>Номер заявки</th>
            <th>Дата</th>
            <th>На имя</th>
            <th>Статус</th>
            <th>Срочность</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>у вас пока нет заказов</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const applicаtions = ref([
  {
    id: '001',
    date: '2000-01-01',
    status: 'Отклонено',
    addressed: 'Имя человека',
    urgency: 'Обычный',
  },
])
</script>

<style lang="postcss" scoped>
table.mobile thead tr th,
table.mobile tbody tr td {
  padding: 8px 16px;
}

table.mobile:first-child {
  @apply border-t-0;
}

table.mobile thead tr th:nth-child(2n-1),
table.mobile tbody tr td:nth-child(2n-1) {
  @apply bg-slate-100;
}

table.desctop thead tr th {
  padding: 8px 16px;
  color: #150802;
}
table.desctop tbody tr td {
  padding: 16px;
  color: #150802;
}

table.desctop tbody tr:nth-child(2n + 1) {
  @apply bg-slate-100;
}
</style>
