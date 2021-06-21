const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

Vue.component('goods-list', {
  props: ['goods'],
  template: `
    <div class="goods-list">
      <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"></goods-item>
    </div>
  `
})

Vue.component('goods-item', {
  props: ['goodProp'],
  template: `
    <div class="goods-item">
      <h3>{{goodProp.product_name}}</h3>
      <p>{{goodProp.price}}</p>
    </div>
  `
})

Vue.component('basket-list', {
  props: ['goods'],
  template: '<aside class="basket-list"><slot name="title"></slot><basket-item v-for="good in goods" :key="good.id" :good="good"></basket-item><slot name="totalCart"></slot></aside>'
})
Vue.component('basket-item', {
  props: ['good'],
  template: '<div class="basket-item"><img :src="good.img" :alt="good.title"><button :id="good.id" v-on:click="deleteItem(event)">&times;</button><div class="basket-item-info"><h3>{{good.title}}</h3><p>{{good.price}}</p></div></div>'
})

Vue.component('search', {
  props: [],
  template: '<div class="goods-search"><input type="text" v-on:keydown.enter="filteredGoods" v-model="app.searchLine" placeholder="Type and press enter"></div>'
})

function filterGoods() {
  app.filterGoods();
}
function addBasket(event) {
  app.addToBasket(event.target.id);
}
function deleteItem(event) {
  app.deleteFromBasket(event.target.id);
}



const app = new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    busketGoods: [],
    searchLine: '',
    showBusket: false,
    totalPriceMessage: '',
    totalPriceCoin: ''
  },
  

  methods: {
    async getProducts() {
      const responce = await fetch(`${API_URL}/catalogData.json`);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
      } else {
        alert("Ошибка при соединении с сервером");
      }
    },
  },

  addToBasket(id) {
    let toBasket;
    this.goods.forEach(function(item) {
        if(id == item.id) {
            toBasket = {
                id: item.id,
                title: item.title,
                price: item.price,
                img: item.img
            }
        }
    });
    this.basketGoods.push(toBasket);
    this.calcAllGoods();
},
deleteFromBasket(id) {
    let getIdElemen;
    this.basketGoods.forEach(function(item, i) {
        let thisId = item.id;
        if(id == thisId) {
            getIdElemen = i;
        }
        
    });
    this.basketGoods.splice(getIdElemen, 1);
    this.calcAllGoods();
},
viewCart() {
    switch(this.isVisibleCart) {
        case(false): {
            this.isVisibleCart = true;
            break;
        }
        case(true): {
            this.isVisibleCart = false;
            break;
        }
    }
},

  async mounted() {
    await this.getProducts()
  }
});
  
       //0:51:53 время пока не нашел ошибку
         
    /*methods: {
            filterGoods(value) {
                const regExp = new RegExp(value, 'i')  
                this.filteredGoods = this.goods.filter(good => regExp.test(good.product_name))
               }

               
               
            },

           
        
    

    const init = async () => {
      const list = new Vue();
    
      await list.filteredGoods();
      list.mounted();

      const searchButton = document.querySelector('.search-button')
      const searchInput = document.querySelector('.goods-search')

      searchButton.addEventListener('click', () => {
          list.filterGoods(searchInput.value)
      })
      
  };
  
  window.onload = init;*/

       
