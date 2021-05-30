

const goods = [
    { title: 'Shirt', price: 150, image:"img/shirts.jpg" },
    { title: 'Socks', price: 50, image:"img/socks.jpg" },
    { title: 'Jacket', price: 350, image:"img/shirts.jpg" },
    { title: 'Shoes', price: 250, image:"img/shirts.jpg" },
  ]
 
  
  const renderGoodsItem = (title, price) => {
    
    return `<div class="goods-item"><img src="img/card.jpg" alt="cart" width="100" height="90"><h3>${title}</h3><p>${price}</p></div>`
    
   
    
  }
  
  const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price))
  
    //   const goodsListDiv = document.querySelector('.goods-list')
    //   goodsListDiv.innerHTML = goodsList
  
    document.querySelector('.goods-list').innerHTML = goodsList.join(''); /*удаляем запятую, задаем значение по умолчанию*/
  
  }
 
  
  const init = () => {
    renderGoodsList(goods)
  }

  
  
  window.onload = init