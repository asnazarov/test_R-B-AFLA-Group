class Card {
    constructor(plan, price, id, option) {
        this.plan = plan;
        this.price = price;
        this.id = id;
        this.option = option;
        this.cr = this.create()
    }

    getActive = (event) => { // клик активного класса карточки
        const elems = this.option.cardContainer.children
        for (let i = 0; i < elems.length; i++) {
            elems[i].classList.contains('active') ? elems[i].classList.remove('active') : null
        }
        event.currentTarget.classList.add('active');
    }
    getData = () => { // передаем параметры в функц handlePlan
        this.option.handlePlan(this.plan, this.price);
    }

    create() {
        this.view = this.option.templateCard.cloneNode(true);
        this.view.querySelector('.card').addEventListener('click', this.getData)
        this.view.querySelector('.card').addEventListener('click', this.getActive)
        this.view.querySelector('.check__Btn').id = this.id;
        // this.view.querySelector('.card__text').setAttribute('for', this.id);
        // this.view.querySelector('.card__text').textContent = `Lisense Plan #${this.plan}`;
        this.view.querySelector('.card__text').textContent = `Lisense Plan # ${this.plan}`;
        this.view.querySelector('.card__price').textContent = `$${this.price} per license`;
        return this.view
    }
}

export default Card