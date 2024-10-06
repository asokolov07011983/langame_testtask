import { IRegisterFields } from "@/interfaces/registerFields";

export const loginFields: IRegisterFields[] = [
    {
        name: "login",
        message: "Пожалуйста заполните поле Логин",
        required: true,
        type: "tel",
        placeholder: "Введите номер телефона",
        src: "/tel.svg",
        alt: "icon",
    },
    {
        name: "password",
        message: "Пожалуйста заполните поле Пароль",
        required: true,
        type: "password",
        placeholder: "Введите пароль",
        src: "/password.svg",
        alt: "icon",
    },
]