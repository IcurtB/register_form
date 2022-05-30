import * as yup from "yup"

export const schemaAuth = yup.object().shape({
    nickName: yup.string().required("Логин не может быть пустым"),
    email: yup.string().required("Почта не может быть пустой").email("Почта указана неверна"),
    password: yup.string().required("Пароль не может быть пустым")
})

