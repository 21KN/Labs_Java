
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
// newDog.sayHi(1)


//Lab_2_task_3

class Task3 extends Dog {
    constructor() {
        super();
        this.age = 0;
        this.name = 'Незнайомець,';

    }

    task3NewNameAge(name, age) {
        console.log('Собака ' + name + ' Вік ' + age);
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
// newTask4.calObject()
// newTask4.calObject()


//Lab_2_task_5

class Detail {

    saveDate(name, trademark, country, manufacturer, dateOfManufacture, uptime, comment) {

        console.log(`Имя ${name} Торгова Марка ${trademark} Страна ${country} Виробник ${manufacturer} Дата Виробництва ${dateOfManufacture} Час Безвідмовної Роботи ${uptime} Коментарий ${comment}`)

        this.establishmentDate()
    }

    establishmentDate() {
        console.log('Дата: ' + new Date())
    }
}

const newDetail = new Detail();
// newDetail.saveDate('Ilya','РошенBadChoc')

//Lab_2_task_6

class WorkAllClasses {

    classDetail(name, trademark, country, manufacturer, dateOfManufacture, uptime, comment) {
        newDetail.saveDate(name, trademark, country, manufacturer, dateOfManufacture, uptime, comment)
    }

    // classTask4() {
    //     newTask4.calObject()     // это класс нужен для подсчета объектов
    // }

    classTask3(name, age) {
        newTask3.task3NewNameAge(name, age)
    }

    classTask2(age) {
        newDog.sayHi(age)
    }

    classTask1_1() {
        newStatistic.searchAverage()
    }

    classTask1_2(min, max) {
        newStatistic.searchMinimumMaximum(min, max)
    }

    classTask1_3(result, add) {
        newStatistic.addResultExperiment(result, add)
    }
}

const allClasses = new WorkAllClasses()
// allClasses.classDetail('Рошен', 'Bablo', 'Ukraine', 'nameManu', '11.11.11 18:34', '18-34', 'it is comm',)
// allClasses.classTask3('asd',12)
// allClasses.classTask1_1()
