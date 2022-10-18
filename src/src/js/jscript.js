let prise = 0;
let srok = 0;
let mistake = 0;
let tr = false;
let type;
let disain;
let adaptiv;

function question() {
    let quest = "Введите верно. ";
    alert(quest + mistake + " вопрос");
}

function iff() {
    if ((type == "Магазин") || (type == "магазин")) {
        prise += 1500;
        srok += 1;
    } else if ((type == "Визитка") || (type == "визитка")) {
        prise += 1000;
        srok += 1;
    } else if ((type == "Веб-сервис") || (type == "веб-сервис")) {
        prise += 2000;
        srok += 2;
    } else {
        tr = true;
        mistake = 1;
        question();
        xx();
    };

    if ((disain == "Серый") || (disain == "серый")) {
        prise += 500;
    } else if ((disain == "Белый") || (disain == "  белый")) {
        prise += 500;
    } else if ((disain == "Синий") || (disain == "синий")) {
        prise += 500;
    } else {
        tr = true;
        mistake = 2;
        question();
        xx();
    };

    if ((adaptiv == "Малоадаптивную") || (adaptiv == "малоадаптивную")) {
        prise += 2000;
        srok += 1;
    } else if ((adaptiv == "Среднеадаптивную") || (adaptiv == "среднеадаптивную")) {
        prise += 2500;
        srok += 2;
    } else if ((adaptiv == "Суперадаптивную") || (adaptiv == "суперадаптивную")) {
        prise += 3500;
        srok += 3;
    } else {
        tr = true;
        mistake = 3;
        question();
        xx();
    };

    if (tr == true) {
        tr = false;
        prise = 0;
        srok = 0;
    }
}

function xx() {
    type = prompt(`Какой тип сайта вас интересует:\nМагазин\nВизитка\nВеб-сервис`);
    disain = prompt(`Какой дизайн вы предпочитаете:\nСерый\nБелый\nСиний`);
    adaptiv = prompt(`Какую адаптивность вы хотите:\nМалоадаптивную\nСреднеадаптивную\nСуперадаптивную`);
    iff();
};
xx();


alert("Цена: " + prise + " р." + "\nСрок: " + srok + " д.");
