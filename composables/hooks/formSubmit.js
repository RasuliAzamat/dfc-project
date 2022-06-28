import {ref, computed, watch} from 'vue'
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'

export function useFormSubmit() {
  const {handleSubmit, isSubmitting, submitCount} = useForm()

  const {value: nameValue, errorMessage: nameError} = useField(
    'name',
    yup.string().trim().required('Это обязательное для заполнения поле')
  )

  const {value: surnameValue, errorMessage: surnameError} = useField(
    'surname',
    yup.string().trim().required('Это обязательное для заполнения поле')
  )

  const {value: telValue, errorMessage: telError} = useField(
    'tel',
    yup
      .string()
      .trim()
      .required('Это обязательное для заполнения поле')
      .min(9, 'Введите только цифры вашего номера без учета кода страны')
      .max(9, 'Введите только цифры вашего номера без учета кода страны')
  )

  const {value: emailValue, errorMessage: emailError} = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Это обязательное для заполнения поле')
      .email('Введите корректный email')
  )

  const {value: borndateValue, errorMessage: borndateError} = useField(
    'borndate',
    yup.string().trim().required('Это обязательное для заполнения поле').min(10)
  )

  const dateError = ref(null)

  const onBorndateChange = event => {
    const date = new Date(event.target.value).getTime()

    if (date >= Date.now()) {
      return (dateError.value = 'Дата вашего рождения не может быть выше сегодняшнего дня')
    }

    dateError.value = null
  }

  const {value: adressValue, errorMessage: adressError} = useField(
    'adress',
    yup.string().trim().required('Это обязательное для заполнения поле')
  )

  const {value: itnValue, errorMessage: itnError} = useField(
    'itn',
    yup.string().trim().required('Это обязательное для заполнения поле')
  )

  const {value: languageValue, errorMessage: languageError} = useField(
    'language',
    yup.string().trim().required('Это обязательное для заполнения поле')
  )

  const {value: urgencyValue, errorMessage: urgencyError} = useField(
    'urgency',
    yup.string().trim().required('Это обязательное для заполнения поле')
  )

  const {value: agreementValue, errorMessage: agreementError} = useField(
    'agreement',
    yup
      .boolean()
      .required('Перед отправкой согласитесь в условиями обработки данных')
      .isTrue('Перед отправкой согласитесь в условиями обработки данных')
  )

  const application = ref(null)
  const applicationError = ref(null)
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
      case 'application':
        application.value = inputValue
        break
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

    if (application.value && passport.value && selfie.value && check.value) {
      applicationError.value = passportError.value = selfieError.value = checkError.value = null
      return (isFulled.value = true)
    }

    if (application.value) {
      applicationError.value = null
    } else {
      applicationError.value = errorMessage
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
    if (isFileFulled()) {
      const router = useRouter()
      const data = Object.assign(values, {
        applications: application.value,
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
    if (val) setTimeout(() => (submitCount.value = 0), 3000)
  })

  return {
    nameValue,
    nameError,
    surnameValue,
    surnameError,
    telValue,
    telError,
    emailValue,
    emailError,
    borndateValue,
    dateError,
    borndateError,
    agreementValue,
    agreementError,
    onBorndateChange,
    adressValue,
    adressError,
    itnValue,
    itnError,
    languageValue,
    languageError,
    urgencyValue,
    urgencyError,
    application,
    applicationError,
    passport,
    passportError,
    selfie,
    selfieError,
    check,
    checkError,
    onFileChange,
    formSubmit,
    telError,
    isSubmitting,
    isTooManyAttepmpts,
  }
}
