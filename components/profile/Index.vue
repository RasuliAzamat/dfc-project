<template>
    <div>
        <TabGroup>
            <div class="flex flex-col md:flex-row">
                <div class="overflow-x-auto mb-10 md:mb-0 md:basis-1/4">
                    <TabList class="flex items-baseline md:flex-col">
                        <Tab as="template" v-slot="{ selected }" class="mr-5 md:mr-0 md:mb-2 whitespace-nowrap">
                            <button :class="{ 'text-primary': selected }">Статус заявки</button>
                        </Tab>
                        <Tab as="template" v-slot="{ selected }" class="mr-5 md:mr-0 md:mb-2 whitespace-nowrap">
                            <button :class="{ 'text-primary': selected }">Настройки аккаунта</button>
                        </Tab>
                        <Tab as="template" v-slot="{ selected }" class="md:mb-2" @click="logout">
                            <button :class="{ 'text-primary': selected }">Выйти</button>
                        </Tab>
                    </TabList>
                </div>

                <TabPanels class="md:basis-3/4">
                    <TabPanel><ProfileApplication /></TabPanel>
                    <TabPanel><ProfileSettings /> </TabPanel>
                    <TabPanel> </TabPanel>
                </TabPanels>
            </div>
        </TabGroup>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const router = useRouter()

const logout = () => {
    router.push('/')
    console.log('loaggggaut')
}
</script>
