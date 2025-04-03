import { Status } from "../const.js";

export const tasks = [
    {
        status: Status.BACKLOG,
        tasks: ["Выпить витамины", "Купить макбук", "Купить билеты в тай"]
    },
    {
        status: Status.PROCESSING,
        tasks: ["Изучить систем дизайн", "Перенести таску в готове", "Записаться в барбишоп"]
    },
    {
        status: Status.DONE,
        tasks: ["Заказать кроссовки", "Установить Gitlab Runner на ЧО"]
    },
    {
        status: Status.BASKET,
        tasks: ["Сдать комиссию", "Причесать новую либу", "Поспать"]
    }
];