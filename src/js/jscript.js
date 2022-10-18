/*let type, disain, adaptiv;

let calc = {
    prise:[
        [1500, 1000, 2000],
        [500, 500, 500],
        [2000, 2500, 3500],
    ],
    days: [
        [1, 1, 2],
        [1, 1, 1],
        [1, 2, 3],
    ],
    start(type, disain, adaptiv){
       let sum = parseInt(calc.prise[0][type - 1]) + parseInt(calc.prise[1][disain - 1]) + parseInt(calc.prise[2][adaptiv - 1])
        let days = parseInt(calc.days[0][type - 1]) + parseInt(calc.days[1][disain - 1]) + parseInt(calc.days[2][adaptiv - 1])
    alert("Цена: " + sum + "р" + "\nСрок: " + days + "д") 
}
}

function otvet(){
    type = prompt(`Какой тип сайта вас интересует:\n1: Магазин\n2: Визитка\n3: Веб-сервис`);
    disain = prompt(`Какой дизайн вы предпочитаете:\n1: Серый\n2: Белый\n3: Синий`);
    adaptiv = prompt(`Какую адаптивность вы хотите:\n1: Малоадаптивную\n2: Среднеадаптивную\n3: Суперадаптивную`);
    
    if(type != 1 && type != 2 && type != 3){
        alert("Нет такого варианта.");
        otvet();
        return;
    }
    if(disain != 1 && disain != 2 && disain != 3){
        alert("Нет такого варианта.");
        otvet();
        return;
    }
    if(adaptiv != 1 && adaptiv != 2 && adaptiv != 3){
        alert("Нет такого варианта.");
        otvet();
        return;
    }
    calc.start(type, disain, adaptiv);
};
       
otvet();
    
*/


let prise = 0, days = 0;
let type, disain, adaptiv;
let mistake = 0;
let tr = false;
let mass = 0, masstwo = 0, massthree = 0;
let calc = {
    prise:[
        [1500, 1000, 2000],
        [500, 500, 500],
        [2000, 2500, 3500],
    ],
    days: [
        [1, 1, 2],
        [1, 1, 1],
        [1, 2, 3],
    ],
    start(mass, masstwo, massthree){
       let sum = parseInt(calc.prise[0][mass - 1]) + parseInt(calc.prise[1][masstwo - 1]) + parseInt(calc.prise[2][massthree - 1])
        let days = parseInt(calc.days[0][mass - 1]) + parseInt(calc.days[1][masstwo - 1]) + parseInt(calc.days[2][massthree - 1])
    alert("Цена: " + sum + "р" + "\nСрок: " + days + "д") 
}
}

function question() {
    let quest = "Введите верно. ";
    alert(quest + "(" + mistake + " вопрос)");
}

function choice() {
    type = prompt(`Какой тип сайта вас интересует:\nМагазин\nВизитка\nВеб-сервис`);
    disain = prompt(`Какой дизайн вы предпочитаете:\nСерый\nБелый\nСиний`);
    adaptiv = prompt(`Какую адаптивность вы хотите:\nМалоадаптивную\nСреднеадаптивную\nСуперадаптивную`);
    result();
};
choice();

function otvet(){
    
}

function result() {
    if ((type == "Магазин") || (type == "магазин")) {
        mass = 1;
    } else if ((type == "Визитка") || (type == "визитка")) {
        mass = 2;
    } else if ((type == "Веб-сервис") || (type == "веб-сервис")) {
        mass = 3;
    } else {
        tr = true;
        mistake = 1;
        question();
        choice();
        result();
        return;
    };

    if ((disain == "Серый") || (disain == "серый")) {
        masstwo = 1;
    } else if ((disain == "Белый") || (disain == "  белый")) {
        masstwo = 2;
    } else if ((disain == "Синий") || (disain == "синий")) {
        masstwo = 3;
    } else {
        tr = true;
        mistake = 2;
        question();
        choice();
        result();
        return;
    };

    if ((adaptiv == "Малоадаптивную") || (adaptiv == "малоадаптивную")) {
        massthree = 1;
    } else if ((adaptiv == "Среднеадаптивную") || (adaptiv == "среднеадаптивную")) {
        massthree = 2;
    } else if ((adaptiv == "Суперадаптивную") || (adaptiv == "суперадаптивную")) {
        massthree = 3;
    } else {
        tr = true;
        mistake = 3;
        question();
        choice();
        result();
        return;
    };

    if (tr == true) {
        tr = false;
        prise = 0;
        days = 0;
        
    }
}
calc.start(mass, masstwo, massthree);