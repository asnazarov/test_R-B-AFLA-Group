class PlanList {
    constructor(cardContainer, inicialCards, cardСreation) {
        this.inicialCards = inicialCards;
        this.cardContainer = cardContainer;
        this.children = this.cardContainer.children;
        this.cardСreation = cardСreation;
        this.render()
    }

    addCard(plan, price, id) { // создаем одну карточку
        this.cardContainer.append(this.cardСreation(plan, price, id).create())
    }

    render() { // перебираем массив data и рендерим карточки передавая в них данные с сервера
        this.inicialCards.forEach(item => {
            this.addCard(item.plan, item.price, item.id)
        })
    }
}

export default PlanList