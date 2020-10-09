import { data as inicialCards } from './data.js';
import Card from './components/Card.js';
import PlanList from './components/PlanList.js';

import { // импорт констант
    cardContainer,
    templateCard,
    licensePlan,
    selectNumberList,
    handlersResultNumber,

} from './constants.js';


function clearingStorage() { // функция очищающая localStorage если в контейнере есть хоть 1 класс active
    const elems = cardContainer.children
    let count = 0;
    for (let i = 0; i < elems.length; i++) {
        if (!(elems[i].classList.contains('active'))) {
            const booleanActive = !(elems[i].classList.contains('active'))
            booleanActive ? count = count + 1 : null;
            count === elems.length ? localStorage.clear() : ''
        }
    }
}

function handleSelect() { // функция для работы с select -> option 
    clearingStorage() // чистим локалСторадж если класс active не выбран
    const selectNumber = Number(selectNumberList.value) // выбранный option
    let localPrice = JSON.parse(localStorage.getItem('price')) // price из localStorage 
    handlersResultNumber.textContent = `$ ${selectNumber * localPrice}` // рендер цены * кол-ва планов
}
selectNumberList.addEventListener('change', handleSelect)


function handlePlan(plan, price) { // по клику вытаскиваем параметры из Card и рендерим выбранный план
    // и умножение цены на количество планов
    licensePlan.style.color = '#3388A8'
    if (plan) {
        licensePlan.textContent = `Selected plan: # ${plan}`
        handlersResultNumber.textContent = `$ ${Number(selectNumberList.value) * price}`
    }
    localStorage.setItem('price', JSON.stringify(price)) // заносим price в локалСторадж для применения в select
}



const cardСreation = (...arg) => new Card(
    ...arg, {
        templateCard, // темплейт карточки
        handlePlan,
        handleSelect,
        cardContainer // контейнер
    }
)
new PlanList(cardContainer, inicialCards, cardСreation)