import {IRegisterFields} from "@/interfaces/registerFields";

export const registerFields: any[] = [
    {
        name: "FIO",
        message: "Пожалуйста заполните поле ФИО",
        required: true,
        type: "text",
        placeholder: "Фамилия Имя Отчество",
        src: "/user.svg",
        alt: "icon",
    },
    {
        name: "telephone",
        message: "Поле должно содержать 11 цифр",
        required: true,
        type: "tel",
        placeholder: "Введите номер телефона",
        src: "/tel.svg",
        alt: "icon",
        width: 300
    },
    {
        name: "birthday",
        message: "Пожалуйста заполните Дату рождения",
        required: true,
        type: "date",
        placeholder: "Дата рождения",
        src: "/calendar.svg",
        alt: "icon",
        width: 300
    },
    {
        name: "document",
        // message: "Пожалуйста заполните Дату рождения",
        required: true,
        type: "select",
        // placeholder: "Дата рождения",
        src: "/id.svg",
        alt: "icon",
        width: 300
    },
    {
        name: "docNumber",
        message: "Поле должно содержать 10 символов",
        required: true,
        type: "number",
        placeholder: "Укажите 10 цифр серия и номер",
        src: "/transcript.svg",
        alt: "icon",
        width: 300
    },
    {
        name: "password",
        message: "Пожалуйста заполните поле Пароль",
        required: true,
        type: "password",
        placeholder: "Укажите пароль",
        src: "/password.svg",
        alt: "icon",
        width: 300
    },
    {
        name: "confirmPassword",
        message: "Пожалуйста повторите Пароль",
        required: true,
        type: "password",
        placeholder: "Повторите пароль",
        src: "/password.svg",
        alt: "icon",
        width: 300
    },
]