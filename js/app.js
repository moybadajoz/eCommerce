const productData = [
    {
        index: '01',
        name: 'yellow tracksuit',
        image: 'img1.jpg',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur rem perspiciatis quis ducimus voluptate deserunt!'
    },
    {
        index: '02',
        name: 'designer outfit',
        image: 'img2.jpg',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur rem perspiciatis quis ducimus voluptate deserunt!'
    },
    {
        index: '03',
        name: 'chilling mood',
        image: 'img3.jpg',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur rem perspiciatis quis ducimus voluptate deserunt!'
    },
    {
        index: '04',
        name: 'Daily outfit',
        image: 'img4.jpg',
        des: 'Descripcion de producto 4'
    },
    {
        index: '05',
        name: 'Pasion por la moda',
        image: 'img5.jpg',
        des: '[Inserte descripcion de producto 5]'
    },
    {
        index: '06',
        name: 'Moda de la temporada',
        image: 'img6.jpg',
        des: 'Aqui deberia de estar la descripcion del producto 6'
    },
    {
        index: '07',
        name: 'Porque tu lo vales',
        image: 'img7.jpg',
        des: 'A alguien se le olvido poner la descripcion del producto 7'
    },
    {
        index: '08',
        name: 'Confort',
        image: 'img8.jpg',
        des: 'Profe se me acaba la creatividad'
    },
    {
        index: '09',
        name: 'Titulo cualquiera',
        image: 'img9.jpg',
        des: 'Descripcion de producto 9: error 404 no found'
    },
    {
        index: '10',
        name: '[generic title]',
        image: 'img10.jpg',
        des: 'descripcion cualquiera a falta de lorem'
    },

]

const nxtBtn = document.querySelector('.nxt-btn')
let smImgContainer = document.querySelector('.sm-product-img-container')
let smImg = document.querySelector('.sm-product-img')
let productIndex = document.querySelector('.product-index')
let smProductDes = document.querySelector('.sm-product-des')

let productImgContainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.product-img')
let backdropImg = document.querySelector('.backdrop-img')

let productDetail = document.querySelector('.product-detail')
let productName = document.querySelector('.product-name')
let productDes = document.querySelector('.product-des')

let currentProduct = 0

nxtBtn.addEventListener('click',() => {
    if(currentProduct >= productData.length - 1){
        currentProduct = 0
    } else {
        currentProduct++
    }
    productIndex.innerHTML = productData[currentProduct].index
    smProductDes.innerHTML = productData[currentProduct].des.slice(0,120)
    ///////////////////////////////////////////////////////////////
    smImgContainer.classList.add('slide')
    productImgContainer.classList.add('slide')
    backdropImg.classList.add('fade')
    productDetail.classList.add('fade')

    setTimeout(() => {
        //ejecuta despues de 500ms, cambia texto
        productName.innerHTML = productData[currentProduct].name
        productDes.innerHTML = productData[currentProduct].des
        smImg.src = productImg.src = backdropImg.src = 
        `
            img/${productData[currentProduct].image}
        `
    }, 500)

    setTimeout(() => {
        smImgContainer.classList.remove('slide')
        productImgContainer.classList.remove('slide')
        backdropImg.classList.remove('fade')
        productDetail.classList.remove('fade')
    })
})

