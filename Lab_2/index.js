
//Lab_2_task_1 - не совсем понятные задания
class Statistic {
    constructor(result) {
        this.result = result;
    }
    addResultExperiment(result, add) {
        return console.log(result + add);
    }

    searchMinimumMaximum(min, max) {
        const date = [min, max];
        console.log('Value: ' +date)

        let maxNum = Math.max(...date);
        console.log('maxNum: ' + maxNum)

        let minNum = Math.min(...date);
        console.log('minNum: ' + minNum)
    }

    searchAverage(number = []) {
        const allValueAdd = number;
        console.log(allValueAdd)   //nWork
    }
}

const newStatistic = new Statistic();
// newStatistic.addResultExperiment(40, 10);
// newStatistic.searchMinimumMaximum(10,20);
// newStatistic.searchAverage(12,32,42)

// Lab_2_task_2

class Dog {
    constructor(age, name) {
        this.name = name;
        this.age = age;
    }

    sayHi(age) {
        for (let i = 0; i < age; i++) {
            console.log('Гав')
        }
    }
}

const newDog = new Dog(10, 'Frederico');
newDog.sayHi(1)


//Lab_2_task_3

class Task3 extends Dog {
    constructor() {
        super();
        this.age = 0;
        this.name = 'Незнайомець,';

    }

    task3NewNameAge(name, age) {
        console.log('Собака ' + name + ' Вік ' + age);
        // this.newTask4.calObject();
    }
}

const newTask3 = new Task3();
// newTask3.task3NewNameAge('Пугач', 21)


//Lab_2_task_4

class Task4 {
    constructor() {
        this.count = 0;
    }

    calObject() {
        this.count++;
        console.log('Количество созданных объектов: ' + this.count)
        Task3.prototype.task3NewNameAge('Пугач', 21)
    }
}

const newTask4 = new Task4();
newTask4.calObject()




//Lab_2_task_5


class Detail {

    saveDate(name, trademark, country, manufacturer, dateOfManufacture, uptime, comment) {

        // if (typeof name || typeof trademark || typeof country || typeof manufacturer || typeof dateOfManufacture || typeof uptime || typeof comment === undefined) {
        //     console.error('Введите все данные');
        // }

        console.log(`Имя ${name} Торгова Марка ${trademark} Страна ${country} Виробник ${manufacturer} Дата Виробництва ${dateOfManufacture} Час Безвідмовної Роботи ${uptime} Коментарий ${comment}`)

        this.establishmentDate()
    }

    establishmentDate() {
        console.log('Дата: ' + new Date())
    }
}

const newDetail = new Detail();
// newDetail.saveDate('Ilya','РошенBadChoc')
