import * as yup from "yup"

export const schemaAuth = yup.object().shape({
    nickName: yup.string().required("Логин не может быть пустым"),
    email: yup.string().required("Почта не может быть пустой").email("Почта указана неверна"),
    password: yup.string().required("Пароль не может быть пустым")
})

export const schemaReg = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    nickName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confPassword: yup.string().required(),
    check: yup.boolean()
})