const formLicenses = document.querySelector('.formLicenses'); //form
const cardContainer = formLicenses.querySelector('.cardContainer'); // контейнер карточек
const templateCard = document.querySelector('#templateCard').content; // темплейт карточки
const licensePlan = formLicenses.querySelector('.handlers__licensePlan')
const selectNumberList = formLicenses.querySelector('.licensesNumber__list');
const handlersResultNumber = formLicenses.querySelector('.handlers__result_number');


export {
    cardContainer,
    templateCard,
    licensePlan,
    selectNumberList,
    handlersResultNumber,
}