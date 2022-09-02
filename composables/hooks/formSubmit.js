import { ref, computed, watch } from 'vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export function useFormSubmit() {
    const { handleSubmit, submitForm, isSubmitting, submitCount } = useForm()

    const { value: nameValue, errorMessage: nameError } = useField(
        'name',
        yup.string().trim().required('Это обязательное для заполнения поле')
    )

    const { value: telValue, errorMessage: telError } = useField(
        'tel',
        yup.string().trim().required('Это обязательное для заполнения поле')
    )

    const { value: emailValue, errorMessage: emailError } = useField(
        'email',
        yup.string().trim().required('Это обязательное для заполнения поле').email('Введите корректный email')
    )

    const { value: itnValue, errorMessage: itnError } = useField(
        'itn',
        yup.number().required('Это обязательное для заполнения поле')
    )

    const { value: checkNumberValue, errorMessage: checkNumberError } = useField(
        'checkNumber',
        yup.number().required('Это обязательное для заполнения поле')
    )

    const { value: languageValue, errorMessage: languageError } = useField(
        'language',
        yup.string().trim().required('Это обязательное для заполнения поле')
    )

    const { value: urgencyValue, errorMessage: urgencyError } = useField(
        'urgency',
        yup.string().required('Это обязательное для заполнения поле')
    )

    const { value: agreementValue, errorMessage: agreementError } = useField(
        'agreement',
        yup
            .boolean()
            .required('Перед отправкой согласитесь в условиями обработки данных')
            .isTrue('Перед отправкой согласитесь в условиями обработки данных')
    )

    const passport = ref(null)
    const passportError = ref(null)
    const selfie = ref(null)
    const selfieError = ref(null)
    const check = ref(null)
    const checkError = ref(null)

    const onFileChange = event => {
        const inputName = event.target.name
        const inputValue = event.target.value

        switch (inputName) {
            case 'passport':
                passport.value = inputValue
                break
            case 'selfie':
                selfie.value = inputValue
                break
            case 'check':
                check.value = inputValue
                break
            default:
                break
        }
        isFileFulled()
    }

    const isFileFulled = () => {
        const isFulled = ref(false)
        const errorMessage = 'Это обязательное для заполнения поле'

        if (passport.value && selfie.value && check.value) {
            passportError.value = selfieError.value = checkError.value = null
            return (isFulled.value = true)
        }

        if (passport.value) {
            passportError.value = null
        } else {
            passportError.value = errorMessage
        }

        if (selfie.value) {
            selfieError.value = null
        } else {
            selfieError.value = errorMessage
        }

        if (check.value) {
            checkError.value = null
        } else {
            checkError.value = errorMessage
        }

        return (isFulled.value = false)
    }

    const formSubmit = handleSubmit(values => {
        console.log(values)
        if (isFileFulled()) {
            const router = useRouter()
            const data = Object.assign(values, {
                passport: passport.value,
                selfie: selfie.value,
                check: check.value,
            })
            console.log(data)
            alert('Ваши данные были отправлены. Вы получите ответ в кратчайшие сроки!')
            return router.push('/')
        }
    })

    const isTooManyAttepmpts = computed(() => submitCount.value >= 3)

    watch(isTooManyAttepmpts, val => {
        if (val) setTimeout(() => (submitCount.value = 0), 5000)
    })

    return {
        nameValue,
        nameError,
        telValue,
        telError,
        emailValue,
        emailError,
        agreementValue,
        agreementError,
        itnValue,
        itnError,
        checkNumberValue,
        checkNumberError,
        languageValue,
        languageError,
        urgencyValue,
        urgencyError,
        passport,
        passportError,
        selfie,
        selfieError,
        check,
        checkError,
        formSubmit,
        onFileChange,
        isSubmitting,
        isTooManyAttepmpts,
    }
}
