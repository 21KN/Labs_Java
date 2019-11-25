
//Lab_2_task_1 - не совсем понятные задания
class Statistic {
    constructor(result) {
        this.result = result;
    }
    addResultExperiment(result, add) {
        return console.log(result + add);
    }


}

const newStatistic = new Statistic();
newStatistic.addResultExperiment(40, 10);

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
