const API_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
    el: '#app',
    data: {
       goods: [],
       filteredGoods: [],
       searchLine: '',
        
    },

    methods: {
        async getProduct() {
                const responce = await fetch(`${API_URL}/catalogData.json`)
                if (responce.ok) {
                    const catalogItems = await responce.json();
                    this.goods = catalogItems;
                    this.filteredGoods = catalogItems;
                } else {
                    alert("Ошибка при соединении с сервером");
                
                }
                
            },
        },
       
         
    methods: {
            filterGoods(value) {
                const regExp = new RegExp(value, 'i')  
                this.filteredGoods = this.goods.filter(good => regExp.test(good.product_name))
               }

               
               
            },

            async mounted() {
                await this.getProduct()
                await this.filteredGoods()

            },
        
    });

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
  
  window.onload = init;

       

        

        
   
   
    
    

