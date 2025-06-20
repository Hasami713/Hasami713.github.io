import { Status } from "../../const.js";
import { generateID } from "../utils.js";

export const tasks = [
    {
        status: Status.BACKLOG,
        tasks: [
            {
                id: generateID(),
                name: "Воскреснуть"
            },
            {
                id: generateID(),
                name: "похавать"
            },
            {
                id: generateID(),
                name: "попить "
            }
        ]
    },
    {
        status: Status.PROCESSING,
        tasks: []
    },
    {
        status: Status.DONE,
        tasks: [
            {
                id: generateID(),
                name: "стать дьяволом"
            },
            {
                id: generateID(),
                name: "купить старую бмв"
            }
        ]
    },
    {
        status: Status.BASKET,
        tasks: [
            {
                id: generateID(),
                name: "продать старую бмв"
            },
            {
                id: generateID(),
                name: "починить бмв"
            },
            {
                id: generateID(),
                name: "помыть бмв"
            },
            {
                id: generateID(),
                name: "разбить бмв"
            }
        ]
    }
]