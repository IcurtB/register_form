import * as yup from "yup"

export const schemaAuth = yup.object().shape({
    nickName: yup.string().required("Логин не может быть пустым"),
    email: yup.string().required("Почта не может быть пустой").email("Почта указана неверна"),
    password: yup.string().required("Пароль не может быть пустым")
})

export const schemaReg = yup.object().shape({
    firstName: yup.string().required("Имя не может быть пустым"),
    lastName: yup.string().required("Фамилие не может быть пустым"),
    nickName: yup.string().required("Акаунт не моежт быть пустым"),
    email: yup.string()
        .required("Имаил не может быть пустым")
        .email("У вас не верный фооормат email"),
    password: yup.string().required("Пароль не может быть пустым").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Должен быть не меньше 8, одну заглавную и одну строчную буквы и цифры."
    ),
    confPassword: yup.string()
        .required("Пароль не может быть пустым")
        .oneOf([yup.ref("password")],"Пароли не совподают"),
    checked: yup.boolean()
})