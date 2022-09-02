<template>
    <section>
        <h1 class="mb-5 md:mb-10 lg:mb-0 text-center">Форма заявления на справку</h1>
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="w-full md:basis-1/2 lg:basis-3/5 self-baseline">
                <IllustrationsForms />
            </div>
            <div class="w-full md:basis-1/2 lg:basis-2/5 self-stretch mt-0 lg:mt-32">
                <form @submit.prevent="formSubmit">
                    <div class="inputs-wrapper md:h-96 md:pr-5 md:mb-10 md:overflow-y-auto">
                        <div class="mb-5">
                            <label for="name">Ваше ФИО</label>
                            <input type="text" name="name" id="name" placeholder="Имя" v-model="nameValue" />
                            <small v-if="nameError">{{ nameError }}</small>
                        </div>
                        <div class="mb-5">
                            <label for="tel">Ваш телефон</label>
                            <input type="tel" name="tel" id="tel" placeholder="Телафон" v-model="telValue" />
                            <small v-if="telError">{{ telError }}</small>
                        </div>
                        <div class="mb-5">
                            <label for="email">Ваш email</label>
                            <input type="email" name="email" id="email" placeholder="Email" v-model="emailValue" />
                            <small v-if="emailError">{{ emailError }}</small>
                        </div>
                        <div class="mb-5">
                            <label for="itn">Ваш индивидуальный номер налогоплательщика</label>
                            <input type="number" name="itn" id="itn" placeholder="ИНН" v-model="itnValue" />
                            <small v-if="itnError">{{ itnError }}</small>
                        </div>
                        <div class="mb-10">
                            <label for="checkNumber">Номер чека оплаты от Амонатбонк</label>
                            <input
                                type="number"
                                name="checkNumber"
                                id="checkNumber"
                                placeholder="Номер чека"
                                v-model="checkNumberValue"
                            />
                            <small v-if="checkNumberError">{{ checkNumberError }}</small>
                        </div>
                        <div class="mb-5">
                            <label class="block mb-3" for="passport">
                                Прикрепите фотографию лицовой стороны фашего пасспорта
                            </label>
                            <input type="file" name="passport" id="passport" :value="passport" @change="onFileChange" />
                            <small v-if="passportError">{{ passportError }}</small>
                        </div>
                        <div class="mb-5">
                            <label class="block mb-3" for="selfie">
                                Сделайте селфи с лицовой стороной вашего пасспорта и прикрепите фотографию
                            </label>
                            <input type="file" name="selfie" id="selfie" :value="selfie" @change="onFileChange" />
                            <small v-if="selfieError">{{ selfieError }}</small>
                        </div>
                        <div class="mb-10">
                            <label class="block mb-3" for="check">
                                Прикрепите фотографию чека оплаты справки от Амонатбонк
                            </label>
                            <input type="file" name="check" id="check" :value="check" @change="onFileChange" />
                            <small v-if="checkError">{{ checkError }}</small>
                        </div>
                        <div class="mb-5">
                            <label for="language">Выберите язык текста справки</label>
                            <select name="language" id="language" v-model="languageValue">
                                <option value="tajik">На таджикском</option>
                                <option value="russian">На русском</option>
                            </select>
                            <small v-if="languageError">{{ languageError }}</small>
                        </div>

                        <div class="mb-10 md:mb-5">
                            <label for="urgency">
                                Выберите Cрочность получения справки (по квитанции от Амонатбонка)
                            </label>
                            <select name="urgency" id="urgency" v-model="urgencyValue">
                                <option value="usual">Обычный - до 10 дней (20 сомон)</option>
                                <option value="urgent">Срочный - до 3 дней (40 сомон)</option>
                            </select>
                            <small v-if="urgencyError">{{ urgencyError }}</small>
                        </div>
                    </div>

                    <div class="mb-3">
                        <div class="flex items-center">
                            <input
                                type="checkbox"
                                name="agreement"
                                id="agreement"
                                class="w-5 h-5 mr-3"
                                v-model="agreementValue"
                            />
                            <label for="agreement">
                                Я согласен с <a href="#" class="underline text-primary">условиями обработки</a> моих
                                данных
                            </label>
                        </div>

                        <small v-if="agreementError">{{ agreementError }}</small>
                    </div>

                    <UiButton
                        :disabled="isSubmitting || isTooManyAttepmpts"
                        class="disabled:pointer-events-none disabled:opacity-50"
                    >
                        Отправить
                    </UiButton>
                    <small v-if="isTooManyAttepmpts"> Вы слишком часто отправляете форму. Повторите позже </small>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { useFormSubmit } from '/composables/hooks/formSubmit'

export default {
    setup() {
        return { ...useFormSubmit() }
    },
}
</script>

<style lang="postcss" scoped>
small {
    @apply block text-red-500;
}

.inputs-wrapper ::-webkit-scrollbar {
    @apply rounded-2xl;
}

.inputs-wrapper::-webkit-scrollbar-track {
    @apply rounded-2xl;
}

.inputs-wrapper::-webkit-scrollbar-thumb {
    @apply rounded-2xl;
}
</style>
