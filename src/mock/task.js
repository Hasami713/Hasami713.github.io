import {Status} from "../const.js";
import {generateID} from "../utils.js";

export const tasks = [
    {
        status: Status.BACKLOG,
        tasks: [
            {
                id: generateID(),
                name: "Поломать прод"
            },
            {
                id: generateID(),
                name: "Прописать DROP DATABASE везде"
            }
        ]
    },
    {
        status: Status.PROCESSING,
        tasks: [
            {
                id: generateID(),
                name: "Пресс качат"
            },
            {
                id: generateID(),
                name: "Бегит"
            },
            {
                id: generateID(),
                name: "Анжумания"
            }
        ]
    },
    {
        status: Status.DONE,
        tasks: [
            {
                id: generateID(),
                name: "Учить Джаву"
            },
            {
                id: generateID(),
                name: "Учить Джаву"
            },
            {
                id: generateID(),
                name: "Учить Джаву"
            }
        ]
    },
    {
        status: Status.BASKET,
        tasks: [
            {
                id: generateID(),
                name: "Начать смотреть 'Во все тяжкие'"
            },
            {
                id: generateID(),
                name: "Продолжить смотреть 'Во все тяжкие'"
            },
            {
                id: generateID(),
                name: "Закончить смотреть 'Во все тяжкие'"
            }
        ]
    }
]