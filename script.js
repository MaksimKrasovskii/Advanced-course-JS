//http запросы
/*GET //получить данные каталога товара
POST // запрос который мы уже отправляем данные


//редко используемые
PUT // если что-то заменить
DELETE // удалить
HEAD 
OPTION
CONNET*/

const API_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

 // Классы
  class BasketItem {
    // Отразим те же элементы что и в списке
    constructor(title, price, img, id, size) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.id = id;
        this.size = size;
        
    }
    
    
    render() {
       
        `<div><button class="cart-button" onclick="viewCart()">Добавить<span id="button"></span></button>
        <button class="cart-button" onclick="viewCart()">Удалить<span id="button"></span></button></цdiv>`
    }
  }

 
  // Класс корзины
  class Basket {
    constructor() {
        // Массив с добавленными товарами
        this.addGoods = [product_name];
        this.deletedGoods = [product_name]; // Если элементы удалены из корзины, то можно их восстановить
    }
    // Привязываем добавление к кнопке
    addToBasket(id) {
        this.id = id
    }
  
    // Удаление товара из корзины 
    deleteFromBasket(id) {
        this.id = id
    }
  
    // Стоимость товаров в корзине
    calcBasket() {}
  
    // Метод оформить заказ
    isOrder() {}
  
    // Содержимое корзины
    render() {}
  
    // Метод открыть корзину
    openBasket() {}
  }

class GoodItem {
    constructor(title = 'Товар', price = 'Цена по запросу', img = 'img/card.jpg', size = 'Размер', id) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.size = size;
        this.id = id;
    }
    render() {
        return `<div class="goods-item" itemid=${this.id}>
                <div class="goods-info">
                  <img src="${this.img}" alt="${this.title}" width='200' height='190'>
                  <h3>${this.title}</h3>
                  <p>${this.size}</p>
                  <p>${this.price}</p>
                </div>
                <button id="button">Добавить в корзину</button>

              </div>`;
    }
  }

  
  
  
  class GoodsList {
    constructor() {
        this.goods = [];
    }

    async fetchGoods() {

       const responce = await fetch(`${API_URL}/catalogData.json`)
       const catalogItems = await responce.json();

       console.log(catalogItems)
        this.goods = catalogItems;
       }

      
        /*this.goods = [{
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
        ]*/
    
    render() {
        let listHtml = '';
        this.goods.forEach((good) => {
            const goodItem = new GoodItem(good.product_name, good.price, good.img, good.size, good.id_product);
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

  const init = async () => {
      const list = new GoodsList();
      await list.fetchGoods();
      list.render();
  };
  window.onload = init;
  
 
  
  


