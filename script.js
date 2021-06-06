class GoodItem {
  constructor(title = 'Товар', price = 'Цена по запросу', img = 'img/card.jpg', size = 'Размер') {
      this.title = title;
      this.price = price;
      this.img = img;
      this.size = size;
  }
  render() {
      return `<div class="goods-item">
              <div class="goods-info">
                <img src="${this.img}" alt="${this.title}" width='200' height='190'>
                <h3>${this.title}</h3>
                <p>${this.size}</p>
                <p>${this.price}</p>
              </div>
              <button class='addClick'>Добавить</button>
            </div>`;
  }
}

class GoodsList {
  constructor() {
      this.goods = [];
  }
  fetchGoods() {
      this.goods = [{
              title: 'Shirt',
              price: 250,
              img: "img/shirt.jpg",
              size: 48
          },
          {
              title: 'Socks',
              price: 30,
              img: 'img/socks.jpg',
              size: 48
          },
          {
              title: 'Jacket',
              price: 250,
              img: 'img/jacket.jpg',
              size: 48
          },
          {
              title: 'Shoes',
              price: 350,
              img: 'img/shoes.jpg',
              size: 41
          },
          {
            title: 'Boots',
              price: 450,
              img: 'img/boots.jpg',
              size: 38
          },
          {
              title: 'Lingerie',
              price: 450,
              img: 'img/card.jpg',
              size: 44
          },
          {
              title: 'Wocth',
              price: 550,
              
          },
          {}
      ]
  }
  render() {
      let listHtml = '';
      this.goods.forEach((good) => {
          const goodItem = new GoodItem(good.title, good.price, good.img, good.size);
          listHtml += goodItem.render();
      })
      document.querySelector('.goods-list').innerHTML = listHtml;
  }
  calcAllGoods() {
      let allPrice = 0;
      this.goods.forEach((good) => {
          if(good.price !== undefined) {
              allPrice += good.price;
              console.log(good.price);
          }
      });
      let allGoodsAnswer = "Все товары на сумму $" + allPrice;
      document.querySelector('.goods-all').innerHTML = allGoodsAnswer;
  }
}

// Классы
class BasketItem {
  // Отразим те же элементы что и в списке
  constructor(title, price, img, link) {
      this.title = title;
      this.price = price;
      this.img = img;
      this.link = link; // Ссылка
  }
  
  render() {

  }
}
// Класс корзины
class Basket {
  constructor() {
      // Массив с добавленными товарами
      this.addGoods = [];
      this.deletedGoods = []; // Если элементы удалены из корзины, то можно их восстановить
  }
  // Привязываем добавление к кнопке
  addToBasket() {}

  // Удаление товара из корзины 
  deleteFromBasket() {}

  // Стоимость товаров в корзине
  calcBasket() {}

  // Метод оформить заказ
  isOrder() {}

  // Содержимое корзины
  render() {}

  // Метод открыть корзину
  openBasket() {}
}

const list = new GoodsList();
list.fetchGoods();

window.onload = () => {
  list.render();
  list.calcAllGoods();
};