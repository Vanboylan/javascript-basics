class ShoppingBasket {
    constructor(items) {
        this.items = [];
    }

    addItem = (item) => {
        this.items.push(item);
    }

    getTotalPrice = () => {
        const total = this.items.map((item) => item.getPrice());
        var sum = 0
        for(var i = 0; i < total.length; i++) {
            sum += +total[i];
        }
        return sum;
    }
}

module.exports = ShoppingBasket;