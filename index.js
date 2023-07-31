const allGoods = [{ name: 'Колекційна модель Hot Wheels Jeep Grand Cherokee Trackhawk', image: 'images/6108850.jpg', category: 'cars', price: 500, description: 'Зануртеся у світ колекції машинок преміум-серії "Форсаж" з колекційною моделлю Hot Wheels Jeep Grand Cherokee Trackhawk. Насолоджуйтеся захоплюючими подіями на високій швидкості завдяки сучасним і ретро автомобілям з багатосерійного блокбастера, відомого своєю швидкістю і стилем. Зберіть усю колекцію машинок для перегонів.' },
{ name: 'Робот-машинка Dade Toys CJ-2180668', image: 'images/6109050.jpg', category: 'cars', price: 200, description: 'Створіть свій автомобіль з роботом-машинкою Dade Toys CJ-2180668. Знайомтеся з конструюванням в легкій, веселій і креативній формі. Вчіться, граючи з роботами-машинками Dade Toys!' },
{ name: 'Пупс Nenuco Soft 35 см', image: 'images/6108929.jpg', category: 'puppetry', price: 1400, description: 'Пупс Nenuco Soft 35 см приверне увагу дитини своїм реалістичним дизайном та функціональністю. Він потребує дбайливої господині. Його приємно обіймати, колисати і укладати спати поруч з собою. Така іграшка не залишить байдужою жодну майбутню маму.' },
{ name: 'Лялька Miraculous Марінетт 26 см', image: 'images/6108369.jpg', category: 'puppetry', price: 995, description: 'Зустрічайте героїв неймовірного мультсеріалу "Леді Баг і Супер-Кіт"! Марінетт і Едріан весело проводять час з друзями та живуть звичайним життям підлітків. Але якщо хтось в небезпеці, то вони перетворюються в яскравих і харизматичних супергероїв - Леді Баг і Супер-Кота! У кожного з них є свій стиль і спеціальні гаджети для боротьби зі злом.' },
{ name: "М'яка іграшка Aurora Penguin 15 см", image: 'images/6108444.jpg', category: 'softPeas', price: 335, description: 'Діти люблять м"які іграшки і ставляться до них як до справжніх тварин. Вони з ними гуляють, їдять, сплять. М"яка іграшка Aurora Penguin 15 см стане відданою дитині.' },
{ name: "М'яка іграшка Keycraft Фламінго 30 см", image: 'images/6337419.jpg', category: 'softPeas', price: 1400, description: 'М"яка іграшка Keycraft Фламінго 30 см стане справжнім другом для любителів цих яскравих птахів. Іграшка дуже м"яка і приємна на дотик. Її так приємно обіймати та з нею весело грати! А ще вона зможе стати справжньою окрасою будь-якої дитячої кімнати!' }
]

const goods = [];

function filterAllGoods(q) {

    goods.splice(0);

    for (let i = 0; i < allGoods.length; i++) {

        if (allGoods[i].category === q) {
            goods.push(allGoods[i].name);
        }
    }
}

const block = document.getElementById('block');
const listGoods = document.createElement('ol');
listGoods.classList.add('list-goods');
block.appendChild(listGoods);

function itemGoods(categoryName) {

    listGoods.innerHTML = '';
    orderGoods.innerHTML = '';
    orderGoods.classList.remove('order-goods');
    const error = document.querySelector('.error');
    error.innerHTML = '';


    goodsInfo.style.display = 'none';
    formOrder.style.display = 'none'

    filterAllGoods(categoryName);

    for (let j = 0; j < goods.length; j++) {

        const itemGoods = document.createElement('li');
        itemGoods.classList.add('item-goods');
        itemGoods.textContent = goods[j];
        itemGoods.onclick = function () { info(goods[j]) }
        listGoods.appendChild(itemGoods);
    }

    listGoods.style.display = 'block';
}


const cars = document.getElementById('cars');
cars.addEventListener('click', function () { itemGoods('cars') });

const puppetry = document.getElementById('puppetry');
puppetry.addEventListener('click', function () { itemGoods('puppetry') });

const softPeas = document.getElementById('softPeas');
softPeas.addEventListener('click', function () { itemGoods('softPeas') });



const goodsInfo = document.createElement('div');
block.appendChild(goodsInfo);
goodsInfo.classList.add('goods-info');

const imageInfo = document.createElement('img');
imageInfo.classList.add('image-info')
goodsInfo.appendChild(imageInfo);

const blockInfo = document.createElement('div');
goodsInfo.appendChild(blockInfo);

const titleInfo = document.createElement('h1');
titleInfo.classList.add('title-info');
blockInfo.appendChild(titleInfo);

const textInfo = document.createElement('p');
textInfo.classList.add('text-info')
blockInfo.appendChild(textInfo);

const priceInfo = document.createElement('p');
priceInfo.classList.add('price-info');
blockInfo.appendChild(priceInfo);

const buttonInfo = document.createElement('button');
buttonInfo.classList.add('button-info');
blockInfo.appendChild(buttonInfo);
buttonInfo.textContent = 'Придбати';

const formOrder = document.querySelector('.form-order')

function info(x) {

    orderGoods.innerHTML = '';
    orderGoods.classList.remove('order-goods');


    const error = document.querySelector('.error');
    error.innerHTML = '';

    formOrder.style.display = 'none';
    for (let index = 0; index < allGoods.length; index++) {
        if (x === allGoods[index].name) {

            titleInfo.textContent = allGoods[index].name;
            textInfo.textContent = allGoods[index].description;
            imageInfo.src = allGoods[index].image;
            priceInfo.textContent = 'Ціна ' + allGoods[index].price + ' грн';
        }
    }
    goodsInfo.style.display = 'flex';
}

buttonInfo.addEventListener('click', function () {
    formOrder.style.display = 'flex'
})

function onSubmitForm(event) {
    event.preventDefault();

    const { elements } = event.target;

    const name = elements.name.value.trim();
    const surname = elements.surname.value.trim();
    const city = elements.city.value;
    const comment = elements.comment.value.trim();
    const radio = elements.radio.value;
    const storage = +elements.storage.value;
    const quantity = +elements.quantity.value;

    const fields = document.getElementsByClassName('field');

    if (isValid(fields, quantity, storage)) {
        purchasingGoogs(city, storage, quantity)
    };

    localStorage.setItem('orders', JSON.stringify(purchasing));
    

}

function isValid(fields, quantity, storage) {

    const errorEl = event.target.querySelector('.error');

    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            errorEl.innerHTML = "Помилка! Заповніть обов'язкові поля!";
            return
        }
    }
    if (quantity < 0 || quantity > 20) {
        errorEl.innerHTML = 'Помилка! Введіть необхідну кількість!';
        return
    }
    if (!Number(storage)) {
        errorEl.innerHTML = 'Помилка! Введіть номер пошти!';
        return
    }
    if (purchasing.some(p => p.name === titleInfo.textContent)) {
        errorEl.innerHTML = 'Помилка! Замовлення оформлене!';
        return
    }


    errorEl.innerHTML = '';
    return true

}


const purchasing = JSON.parse(localStorage.getItem('orders')) || [];
const orderGoods = document.querySelector('.shoping');


function purchasingItem() {
    const date = new Date;

    allGoods.forEach(el => {
        purchasing.forEach(value => {
            if (el.name === value.name) {
                value.price = el.price;
                value.date = date.toLocaleDateString();
            }
        })
    })

}


function purchasingGoogs(city, storage, quantity) {

    purchasing.push({
        city,
        storage,
        quantity,
        name: titleInfo.textContent,
    })
    purchasingItem()

    orderGoods.classList.add('order-goods');

    orderGoods.innerHTML = `<span> 
    <h3>Інформація про замовлення</h3>
    Назва товару: ${titleInfo.textContent}<br>
    Місто: ${city}<br> 
    Відділення Нової пошти:  № ${storage}<br>
    Кількість товару: ${quantity} шт.</span>`;

}

const conteiner = document.getElementById('conteiner');
const listOrder = document.createElement('ol');
conteiner.appendChild(listOrder);

const buttonOrder = document.getElementById('buttonOrder');
const infoOrder = document.createElement('div');
conteiner.appendChild(infoOrder);
infoOrder.style.width = '50%'

buttonOrder.onclick = showOrders;


function showOrders() {
    block.style.display = 'none';
    formOrder.style.display = 'none';

    listOrder.innerHTML = '';
    infoOrder.innerHTML = '';

    listOrder.classList.add('list-order')

    for (let i = 0; i < purchasing.length; i++) {
        const orderItem = document.createElement('li');
        listOrder.appendChild(orderItem);
        const orderTextItem = document.createElement('p');
        orderItem.appendChild(orderTextItem);
        orderTextItem.textContent = (i + 1) + '.  ' + purchasing[i].name + ' ( Ціна: ' + purchasing[i].price + ' грн;  Дата: ' + purchasing[i].date + ' )';
        orderTextItem.onclick = function () { showInfoOrder(purchasing[i].name, infoOrder, purchasing[i].city, purchasing[i].quantity, purchasing[i].storage) }
        const deleteOrder = document.createElement('button');
        orderItem.appendChild(deleteOrder);
        deleteOrder.classList.add('order-delete');
        deleteOrder.onclick = function () { orderDeleteItem(purchasing[i]) }
    }

}

function orderDeleteItem(name) {

    let indexToRemove = purchasing.indexOf(name);
    if (indexToRemove !== -1) {
        purchasing.splice(indexToRemove, 1);
    }

    localStorage.setItem('orders', JSON.stringify(purchasing));
    showOrders()
}


function showInfoOrder(item, info, city, quantity, storage) {

    info.innerHTML = ''
    for (let index = 0; index < allGoods.length; index++) {
        if (item === allGoods[index].name) {
            info.innerHTML = `
         <h3>Деталі замовлення</h3>
         Назва товару: ${allGoods[index].name}<br>
         Кількіть: ${storage}<br>
         Ціна: ${allGoods[index].price} грн.<br>
         Доставка: місто ${city}, відділення нової пошти: ${quantity}<br>
         Повна інформіцїя про товар: ${allGoods[index].description}<br>
         <img src = ${allGoods[index].image} style = "width: 200px"></img>
        `
        }

    }
}
