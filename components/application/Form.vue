<template>
  <TabGroup>
    <TabList class="flex justify-between">
      <Tab v-for="{id, text} in steps" :key="id" as="template" v-slot="{selected}">
        <button
          :class="[
            'w-full py-1 px-5 text-xl border-b-2',
            selected ? 'border-b-primary text-primary font-semibold' : 'border-b-transparent',
          ]"
        >
          {{ text }}
        </button>
      </Tab>
    </TabList>
    <TabPanels class="mt-7 md:mt-10">
      <form action="#" method="post">
        <TabPanel>
          <div class="mb-5">
            <label for="born">Ваше имя</label>
            <input type="text" name="name" id="name" placeholder="Имя" />
            <!-- <small class="text-red-500">Далеко-далеко за словесными горами в стране.</small> -->
          </div>
          <div class="mb-5">
            <label for="born">Ваша фамилия</label>
            <input type="text" name="surname" id="surname" placeholder="Фамилия" />
          </div>
          <div class="mb-5">
            <label for="born">Дата вашего рождения</label>
            <input type="date" name="born" id="born" />
          </div>
          <div class="mb-5">
            <label for="born">Адрес вашей прописки</label>
            <input type="text" name="adress" id="adress" placeholder="Адресс" />
          </div>
          <div class="mb-10">
            <label for="born">Ваш индивидуальный номер налогоплательщика</label>
            <input type="text" name="itn" id="itn" placeholder="ИНН" />
          </div>
          <UiButton>Далее</UiButton>
        </TabPanel>
        <TabPanel>
          <div class="mb-5">
            <label class="block mb-3" for="application">
              Прикрепите фотографию заполненной анекты по
              <a href="#" class="underline text-primary">бланку</a>
            </label>
            <input type="file" name="application" id="application" />
          </div>
          <div class="mb-5">
            <label class="block mb-3" for="passport">
              Прикрепите фотографию лицовой стороны фашего пасспорта
            </label>
            <input type="file" name="passport" id="passport" />
          </div>
          <div class="mb-5">
            <label class="block mb-3" for="selfie">
              Сделайте селфи с лицовой стороной вашего пасспорта и прикрепите фотографию
            </label>
            <input type="file" name="selfie" id="selfie" />
          </div>
          <div class="mb-10">
            <label class="block mb-3" for="check">
              Прикрепите фотографию чека оплаты справки от Амонатбонк
            </label>
            <input type="file" name="check" id="check" />
          </div>

          <UiButton>Далее</UiButton>
        </TabPanel>
        <TabPanel>
          <select class="mb-10" name="language" id="language">
            <option value="default" selected disabled>Выберите язык текста справки</option>

            <option value="tajik">На таджикском</option>
            <option value="russian">На русском</option>
          </select>
          <div class="flex items-center mb-3">
            <input type="checkbox" name="agreement" id="agreement" class="w-5 h-5 mr-3" />
            <label for="agreement">Я согласен с условиями обработки моих данных</label>
          </div>
          <UiButton>Отправить</UiButton>
        </TabPanel>
      </form>
    </TabPanels>
  </TabGroup>
</template>

<script setup>
import {TabGroup, TabList, Tab, TabPanels, TabPanel} from '@headlessui/vue'
</script>

<style lang="postcss" scoped>
input[type='text'],
input[type='date'],
input[type='number'],
select {
  @apply w-full px-4 py-1 border rounded-md border-light  placeholder:text-light transition-all focus:border-primary focus:placeholder:text-dark;
}
</style>
