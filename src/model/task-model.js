import { tasks } from "../mock/task.js";


export default class TasksModel {
    #boardtasks = tasks;
    #observers = [];

    get tasks() {
        return this.#boardtasks;
    }

    getTasksByStatus(status) {
        return this.#boardtasks.filter(f => f.status === status)[0];
    }

    addTask(title) {
        const newTask = {
            id: generateID(),
            name: title
        };

        const backlogTask = this.getTasksByStatus(Status.BACKLOG);

        if (!backlogTask) {
            this.#boardtasks.unshift({
                status: Status.BACKLOG,
                tasks: [newTask]
            });
        }
        else
        {
            backlogTask.tasks.push(newTask);
        }

        this._notifyObservers();
    }

    removeBasketTask() {
        const basketTasks = this.getTasksByStatus(Status.BASKET);

        basketTasks.tasks.length = 0;

        this._notifyObservers();
    }

    addObserver(observer) {
        this.#observers.push(observer);
    }

    removeObserver(observer) {
        this.#observers.filter(o => o !== observer);
    }

    _notifyObservers() {
        this.#observers.forEach(observer => observer());
    }

    updateTaskStatus(newStatus, taskId, droppedTask) {
        const [oldStatus, task] = this.getTaskInfoById(taskId);

        if (task && task.id !== droppedTask.taskId) {
            const taskByStatus = this.getTasksByStatus(newStatus);
            const order = droppedTask.order;

            this.removeTaskFromStatus(task, oldStatus);

            if (order === OrderPosition.START || order === OrderPosition.END) {
                const indexSet = order === OrderPosition.START ? 0 : taskByStatus.tasks.length;
                taskByStatus.tasks.splice(indexSet, 0, task);
            } else {
                const indexDroppedTask = taskByStatus.tasks.indexOf(this.getTaskInfoById(droppedTask.taskId)[1]) + (order === OrderPosition.ABOVE ? 0 : 1);
                taskByStatus.tasks.splice(indexDroppedTask, 0, task);
            }


            this._notifyObservers();
        }
    }


}