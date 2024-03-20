
const urlParam=new URLSearchParams(window.location.search)
let productID=urlParam.get('pId')

async function gotProduct(){
    const response=await axios.get(`https://dummyjson.com/products/${productID}`)
    const data=response.data
    let product=data
    console.log(data)
    let {brand,images,title}=product
    document.querySelector('.product').innerHTML=`<h2>${title}</h2>`
    
}
async function getProduct(){
    const response=await axios.get(`https://dummyjson.com/products/${productID}`)
    const data=response.data
    let product=data
    document.querySelector('.swiper-wrapper').innerHTML=product.images.map(function(item){
        return `
        <div class="swiper-slide"><img src='${item}'></div>
        `
    }).join('')
    
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
     a11y: {
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
        },
  });
  gotProduct()
  getProduct()

  console.log(document.querySelector('.swiper-wrapper'))