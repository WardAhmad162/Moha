
/*async function getProduct(){
    const res=await fetch('https://dummyjson.com/products')
    const data=await res.json()
    const products=data.products
    console.log(data)
    document.querySelector('.products').innerHTML=products.map(function(item){
        return`
        <div class="product">
           <h2>${item.title}</h2>
           <img src='${item.images[0]}'>
           <div class="productDesc">
               <span>${item.price}$</span>
               <span>${item.rating}</span>
            </div>
        </div>
        `
    }).join('')

}*/

async function getProducts(){
    const res=await axios.get('https://dummyjson.com/products')
    const data=res.data
    let products=data.products
    console.log(data)

    document.querySelector('.products').innerHTML=products.map(function(item){
        return`
        <div class="product">
           <h2>${item.title}</h2>
           <img src='${item.images[0]}'>
               <span>${item.description}$</span>
               <a href='./details.html?pId=${item.id}'>see more</a>
        </div>
        `
    }).join('')
}
getProducts()