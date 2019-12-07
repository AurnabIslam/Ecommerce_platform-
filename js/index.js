//Product Data
var product1 = {
    name:'Shirt #1',
    imgURL:'img/tshirt_1.jpg',
    color1:'Grey',
    color2:'Red',
    color3:'Blue',
    size1:'M',
    size2:'L',
    size3:'XL',
    rating:'4.5',
    price: 39.99
};
var product2 = {
    name:'Shirt #2',
    imgURL:'img/tshirt_2.jpg',
    color1:'Black',
    color2:'White',
    color3:'Grey',
    size1:'XS',
    size2:'S',
    size3:'M',
    rating:'3.5',
    price: 19.99
};
var product3 = {
    name:'Shirt #3',
    imgURL:'img/tshirt_3.jpg',
    color1:'White',
    color2:'Red',
    color3:'Blue',
    size1:'S',
    size2:'M',
    size3:'L',
    rating:'4.2',
    price: 29.99
};
var product4 = {
    name:'Shirt #4',
    imgURL:'img/tshirt_4.jpg',
    color1:'White',
    color2:'Blue',
    color3:'Black',
    size1:'S',
    size2:'M',
    size3:'L',
    rating:'3.9',
    price: 25.99
};
var product5 = {
    name:'Shirt #5',
    imgURL:'img/tshirt_5.jpg',
    color1:'Grey',
    color2:'Red',
    color3:'Blue',
    size1:'M',
    size2:'L',
    size3:'XL',
    rating:'4.3',
    price: 35.99
};
var product6 = {
    name:'Shirt #6',
    imgURL:'#',
    color1:'Black',
    color2:'Red',
    color3:'Blue',
    size1:'M',
    size2:'L',
    size3:'XL',
    rating:'4',
    price: 39.99
};
var product7 = {
    name:'Shirt #7',
    imgURL:'#',
    color1:'Grey',
    color2:'Black',
    color3:'Blue',
    size1:'M',
    size2:'L',
    size3:'XL',
    rating:'4',
    price: 29.99
};
var product8 = {
    name:'Shirt #8',
    imgURL:'#',
    color1:'Black',
    color2:'White',
    color3:'Grey',
    size1:'XS',
    size2:'S',
    size3:'M',
    rating:'4',
    price: 25.99
};
var product9 = {
    name:'Shirt #9',
    imgURL:'#',
    color1:'Red',
    color2:'Blue',
    color3:'White',
    size1:'S',
    size2:'M',
    size3:'L',
    rating:'4',
    price: 29.99
};
var product10 = {
    name:'Shirt #10',
    imgURL:'#',
    color1:'Black',
    color2:'White',
    color3:'Grey',
    size1:'S',
    size2:'M',
    size3:'L',
    rating:'4',
    price: 29.99
};
var product11 = {
    name:'Shirt #11',
    imgURL:'#',
    color1:'Grey',
    color2:'Red',
    color3:'Blue',
    size1:'M',
    size2:'L',
    size3:'XL',
    rating:'4',
    price: 39.99
};
var product12 = {
    name:'Shirt #12',
    imgURL:'#',
    color1:'Black',
    color2:'White',
    color3:'Grey',
    size1:'XS',
    size2:'S',
    size3:'M',
    rating:'4',
    price: 19.99
};
var product13 = {
    name:'Shirt #13',
    imgURL:'#',
    color1:'White',
    color2:'Red',
    color3:'Blue',
    size1:'S',
    size2:'M',
    size3:'L',
    rating:'4',
    price: 29.99
};
var product14 = {
    name:'Shirt #14',
    imgURL:'#',
    color1:'White',
    color2:'Blue',
    color3:'Black',
    size1:'S',
    size2:'M',
    size3:'L',
    rating:'4',
    price: 25.99
};
var product15= {
    name:'Shirt #15',
    imgURL:'#',
    color1:'Grey',
    color2:'Red',
    color3:'Blue',
    size1:'M',
    size2:'L',
    size3:'XL',
    rating:'4',
    price: 35.99
};
var product16 = {
    name:'Shirt #16',
    imgURL:'#',
    color1:'Black',
    color2:'Red',
    color3:'Blue',
    size1:'M',
    size2:'L',
    size3:'XL',
    rating:'4',
    price: 39.99
};
var product17 = {
    name:'Shirt #17',
    imgURL:'#',
    color1:'Grey',
    color2:'Black',
    color3:'Blue',
    size1:'M',
    size2:'L',
    size3:'XL',
    rating:'4',
    price: 29.99
};
var product18 = {
    name:'Shirt #18',
    imgURL:'#',
    color1:'Black',
    color2:'White',
    color3:'Grey',
    size1:'XS',
    size2:'S',
    size3:'M',
    rating:'4',
    price: 25.99
};
var product19 = {
    name:'Shirt #19',
    imgURL:'#',
    color1:'Red',
    color2:'Blue',
    color3:'White',
    size1:'S',
    size2:'M',
    size3:'L',
    rating:'4',
    price: 35.99
};
var product20 = {
    name:'Shirt #20',
    imgURL:'#',
    color1:'Black',
    color2:'White',
    color3:'Grey',
    size1:'S',
    size2:'M',
    size3:'L',
    rating:'4',
    price: 35.99
};

//Product Images
document.getElementById('product1-img').src=product1.imgURL;
document.getElementById('product2-img').src=product2.imgURL;
document.getElementById('product3-img').src=product3.imgURL;
document.getElementById('product4-img').src=product4.imgURL;
document.getElementById('product5-img').src=product5.imgURL;

//Product Names
document.getElementById('product1-name').innerHTML=product1.name;
document.getElementById('product2-name').innerHTML=product2.name;
document.getElementById('product3-name').innerHTML=product3.name;
document.getElementById('product4-name').innerHTML=product4.name;
document.getElementById('product5-name').innerHTML=product5.name;

//Product Colors
document.getElementById('product1-color1-text').textContent=product1.color1;
document.getElementById('product1-color2-text').textContent=product1.color2;
document.getElementById('product1-color3-text').textContent=product1.color3;

document.getElementById('product2-color1-text').textContent=product2.color1;
document.getElementById('product2-color2-text').textContent=product2.color2;
document.getElementById('product2-color3-text').textContent=product2.color3;


document.getElementById('product3-color1-text').textContent=product3.color1;
document.getElementById('product3-color2-text').textContent=product3.color2;
document.getElementById('product3-color3-text').textContent=product3.color3;


document.getElementById('product4-color1-text').textContent=product4.color1;
document.getElementById('product4-color2-text').textContent=product4.color2;
document.getElementById('product4-color3-text').textContent=product4.color3;


document.getElementById('product5-color1-text').textContent=product5.color1;
document.getElementById('product5-color2-text').textContent=product5.color2;
document.getElementById('product5-color3-text').textContent=product5.color3;

//Product Sizes
document.getElementById('product1-size1-text').textContent=product1.size1;
document.getElementById('product1-size2-text').textContent=product1.size2;
document.getElementById('product1-size3-text').textContent=product1.size3;

document.getElementById('product2-size1-text').textContent=product2.size1;
document.getElementById('product2-size2-text').textContent=product2.size2;
document.getElementById('product2-size3-text').textContent=product2.size3;

document.getElementById('product3-size1-text').textContent=product3.size1;
document.getElementById('product3-size2-text').textContent=product3.size2;
document.getElementById('product3-size3-text').textContent=product3.size3;

document.getElementById('product4-size1-text').textContent=product4.size1;
document.getElementById('product4-size2-text').textContent=product4.size2;
document.getElementById('product4-size3-text').textContent=product4.size3;

document.getElementById('product5-size1-text').textContent=product5.size1;
document.getElementById('product5-size2-text').textContent=product5.size2;
document.getElementById('product5-size3-text').textContent=product5.size3;

//Product Rating
document.getElementById('product1-rating').innerHTML=product1.rating;
document.getElementById('product2-rating').innerHTML=product2.rating;
document.getElementById('product3-rating').innerHTML=product3.rating;
document.getElementById('product4-rating').innerHTML=product4.rating;
document.getElementById('product5-rating').innerHTML=product5.rating;

//Product Price
document.getElementById('product1-price-val').setAttribute = product1.price;
document.getElementById('product1-price-ins').innerHTML = "$" + product1.price;

document.getElementById('product2-price-val').setAttribute = product2.price;
document.getElementById('product2-price-ins').innerHTML = "$" + product2.price;

document.getElementById('product3-price-val').setAttribute = product3.price;
document.getElementById('product3-price-ins').innerHTML = "$" + product3.price;

document.getElementById('product4-price-val').setAttribute = product4.price;
document.getElementById('product4-price-ins').innerHTML = "$" + product4.price;

document.getElementById('product5-price-val').setAttribute = product5.price;
document.getElementById('product5-price-ins').innerHTML = "$" + product5.price;