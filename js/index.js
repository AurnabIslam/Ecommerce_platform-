var all_products = [{"product":"1","productName":"Shirt #1","productImage":"img/tshirt_1.jpg","color1":"Grey","color2":"Red","color3":"Blue","color":"Grey, Red, Blue","size1":"M","size2":"L","size3":"XL","size":"M, L, XL","rating":4.5,"price":39.99},{"product":"2","productName":"Shirt #2","productImage":"img/tshirt_2.jpg","color1":"Black","color2":"White","color3":"Grey","color":"Black, White, Grey","size1":"XS","size2":"S","size3":"M","size":"XS, S, M","rating":3.5,"price":19.99},{"product":"3","productName":"Shirt #3","productImage":"img/tshirt_3.jpg","color1":"White","color2":"Red","color3":"Blue","color":"White, Red, Blue","size1":"S","size2":"M","size3":"L","size":"S, M, L","rating":4.2,"price":29.99},{"product":"4","productName":"Shirt #4","productImage":"img/tshirt_4.jpg","color1":"White","color2":"Blue","color3":"Black","color":"White, Blue, Black","size1":"S","size2":"M","size3":"L","size":"S, M, L","rating":3.9,"price":25.99},{"product":"5","productName":"Shirt #5","productImage":"img/tshirt_5.jpg","color1":"Grey","color2":"Red","color3":"Blue","color":"Grey, Red, Blue","size1":"M","size2":"L","size3":"XL","size":"M, L, XL","rating":4.3,"price":35.99},{"product":"6","productName":"Shirt #6","productImage":"img/tshirt_6.jpg","color1":"Black","color2":"Red","color3":"Blue","color":"Black, Red, Blue","size1":"M","size2":"L","size3":"XL","size":"M, L, XL","rating":4.5,"price":39.99},{"product":"7","productName":"Shirt #7","productImage":"img/tshirt_7.jpg","color1":"Grey","color2":"Black","color3":"Blue","color":"Grey, Black, Blue","size1":"M","size2":"L","size3":"XL","size":"M, L, XL","rating":4.1,"price":29.99},{"product":"8","productName":"Shirt #8","productImage":"img/tshirt_8.jpg","color1":"Black","color2":"White","color3":"Grey","color":"Black, White, Grey","size1":"XS","size2":"S","size3":"M","size":"XS, S, M","rating":3.8,"price":25.99},{"product":"9","productName":"Shirt #9","productImage":"img/tshirt_9.jpg","color1":"Red","color2":"White","color3":"Blue","color":"Red, White, Blue","size1":"S","size2":"M","size3":"L","size":"S, M, L","rating":4,"price":29.99},{"product":"10","productName":"Shirt #10","productImage":"img/tshirt_10.jpg","color1":"Black","color2":"White","color3":"Grey","color":"Black, White, Grey","size1":"S","size2":"M","size3":"L","size":"S, M, L","rating":"3.9","price":"29.99"},{"product":"11","productName":"Shirt #11","productImage":"img/tshirt_11.jpg","color1":"Grey","color2":"Red","color3":"Blue","color":"Grey, Red, Blue","size1":"M","size2":"L","size3":"XL","size":"M, L, XL","rating":"4.4","price":"39.99"},{"product":"12","productName":"Shirt #12","productImage":"img/tshirt_12.jpg","color1":"Black","color2":"White","color3":"Grey","color":"Black, White, Grey","size1":"XS","size2":"S","size3":"M","size":"XS, S, M","rating":"3.6","price":"19.99"},{"product":"13","productName":"Shirt #13","productImage":"img/tshirt_13.jpg","color1":"White","color2":"Red","color3":"Blue","color":"White, Red, Blue","size1":"S","size2":"M","size3":"L","size":"S, M, L","rating":"4","price":"29.99"},{"product":"14","productName":"Shirt #14","productImage":"img/tshirt_14.jpg","color1":"White","color2":"Blue","color3":"Black","color":"White, Blue, Black","size1":"S","size2":"M","size3":"L","size":"S, M, L","rating":"3.7","price":"25.99"},{"product":"15","productName":"Shirt #15","productImage":"img/tshirt_15.jpg","color1":"Grey","color2":"Red","color3":"Blue","color":"Grey, Red, Blue","size1":"M","size2":"L","size3":"XL","size":"M, L, XL","rating":"4.2","price":"35.99"},{"product":"16","productName":"Shirt #16","productImage":"img/tshirt_16.jpg","color1":"Black","color2":"Red","color3":"Blue","color":"Black, Red, Blue","size1":"M","size2":"L","size3":"XL","size":"M, L, XL","rating":"4.5","price":"39.99"},{"product":"17","productName":"Shirt #17","productImage":"img/tshirt_17.jpg","color1":"Grey","color2":"Black","color3":"Blue","color":"Grey, Black, Blue","size1":"M","size2":"L","size3":"XL","size":"M, L, XL","rating":"3.8","price":"29.99"},{"product":"18","productName":"Shirt #18","productImage":"img/tshirt_18.jpg","color1":"Black","color2":"White","color3":"Grey","color":"Black, White, Grey","size1":"XS","size2":"S","size3":"M","size":"XS, S, M","rating":"3.6","price":"25.99"},{"product":"19","productName":"Shirt #19","productImage":"img/tshirt_19.jpg","color1":"Red","color2":"Blue","color3":"White","color":"Red, Blue, White","size1":"S","size2":"M","size3":"L","size":"S, M, L","rating":"4.2","price":"35.99"},{"product":"20","productName":"Shirt #20","productImage":"img/tshirt_20.jpg","color1":"Black","color2":"White","color3":"Grey","color":"Black, White, Grey","size1":"S","size2":"M","size3":"L","size":"S, M, L","rating":"4.2","price":"35.99"}];

var product_no = 0;
var products_by_highlow;
var products_by_lowhigh;
var sort_by = document.getElementById('sort').value;
console.log(sort_by);
var filter_color;
var filter_size;
var filter_rating;
var searchResult;
// filtering
function getFilterColors(){ //getting the filter color
  // Getting the values from html
  if (document.getElementById("black").checked == true){
    filter_color = "Black";
  } else if (document.getElementById("white").checked == true){
    filter_color = "White";
  } else if (document.getElementById("grey").checked == true){
    filter_color = "Grey";
  } else if (document.getElementById("red").checked == true){
    filter_color = "Red";
  } else if (document.getElementById("blue").checked == true){
    filter_color = "Blue";
  } else {
    filter_color = "allcolors";
  }
  
  console.log(filter_color);
  
  // selection of a single color or all, note that a single product may have more than one color
  if (filter_color=="allcolors"){
    all_products = all_products;
  } else{
    var filtered_products =  all_products.filter(function(col) {
      return ((col.color1 == filter_color)||(col.color2 == filter_color)||(col.color3 == filter_color));
    });
    //console.log(filtered_products);
    //console.log(all_products);   
    all_products = filtered_products; 
  }
}
function getFilterSizes(){  //getting by sizes
  // Getting the values from html
  if (document.getElementById("XS").checked == true){
    filter_size = "XS";
  } else if (document.getElementById("S").checked == true){
    filter_size = "S";
  } else if (document.getElementById("M").checked == true){
    filter_size = "M";
  } else if (document.getElementById("L").checked == true){
    filter_size = "L";
  } else if (document.getElementById("XL").checked == true){
    filter_size = "XL";
  } else {
    filter_size = "allsizes";
  }
  console.log(filter_size);
  // selection of a single color or all, note that a single product may have more than one color
  if (filter_size=="allsizes"){
    all_products = all_products;
  } else{
    var filtered_products =  all_products.filter(function(size) {
      return ((size.size1 == filter_size)||(size.size2 == filter_size)||(size.size3 == filter_size));
    });
    //console.log(filtered_products);
    //console.log(all_products);   
    all_products = filtered_products; 
  }
}
function getFilterRating(){ //filtering by rating
  // Getting the values from html
  if (document.getElementById("aboveFour").checked == true){
    filter_rating = "4";
  } else if (document.getElementById("aboveThree").checked == true){
    filter_rating = "3";
  } else if (document.getElementById("aboveTwo").checked == true){
    filter_rating = "2";
  } else if (document.getElementById("aboveOne").checked == true){
    filter_rating = "1";
  } else {
    filter_rating = "allrating";
  }
  console.log(filter_rating);
  // selection of a single color or all, note that a single product may have more than one color
  if (filter_rating =="allrating"){
    all_products = all_products;
  } else{
    var filtered_products =  all_products.filter(function(rat) {
      return (rat.rating >= filter_rating);
    });
    //console.log(filtered_products);
    //console.log(all_products);   
    all_products = filtered_products; 
  }
}
function sortProductsByPrice() {  // Sorting by price, requires refresh to load products
  //remember to refresh page once after the selecting sorting option
  if (sort_by == 'price-high') {
    all_products = all_products.sort((a, b) => b.price - a.price);
    //console.log(all_products);
  } else if (sort_by == 'price-low') {
    all_products = all_products.sort((a, b) => a.price - b.price);
    //console.log(all_products);
  } else {
    //console.log(all_products);
  }
  printProduct();
}
function getSearchResult(){
  var searchResult = document.getElementById("find").value;
  if (searchResult == null){
    all_products = all_products;
  } else{
    var searchedProduct =  all_products.filter(function(search) {
      return (search.productName == searchResult);
    });
    all_products = searchedProduct;
  }
  
  console.log("Search Result");
  console.log(all_products);
  printProduct();
}

var page_number = 1;
document.onload = page_no_1();     // To start from page 1 on load

function prv_page_go() {
  page_number = page_number - 1;
  if (page_number == 1) {
    page_no_1();
  } else if (page_number == 2) {
    page_no_2();
  } else if (page_number == 3) {
    page_no_3();
  } else {
    page_no_4();
  }
  //document.location.reload();
}



function page_no_1() {
  page_number = 1;
  document.getElementById("nav-bar").style.display = 'none';

  getFilterColors();            // Filtering By Color
  getFilterSizes();             // Filtering By Size
  getFilterRating();            // Filtering By Rating
  sortProductsByPrice();        // Sorting By Price

  product_no = 0;
  printProduct();
  console.log(product_no);
  console.log(all_products);
  

  //document.location.reload();
  document.getElementById("page_id").innerHTML = "1-5 of " + all_products.length + " products found";
  document.getElementById("prv-page-go").disabled = true;
  document.getElementById("next-page-go").disabled = false;
}
function page_no_2() {
  page_number = 2;


  product_no = 5;
  printProduct();
  console.log(product_no);

  //document.location.reload();
  document.getElementById("page_id").innerHTML = "6-10 of " + all_products.length + " products found";
  document.getElementById("prv-page-go").disabled = false;
  document.getElementById("next-page-go").disabled = false;
}
function page_no_3() {
  page_number = 3;


  product_no = 10;
  printProduct();
  console.log(product_no);


  //document.location.reload();
  document.getElementById("page_id").innerHTML = "11-15 of " + all_products.length + " products found";
  document.getElementById("prv-page-go").disabled = false;
  document.getElementById("next-page-go").disabled = false;
}
function page_no_4() {
  page_number = 4;


  product_no = 15;
  printProduct();
  console.log(product_no);


  //document.location.reload();
  document.getElementById("page_id").innerHTML = "16-20 of " + all_products.length + " products found";
  document.getElementById("prv-page-go").disabled = false;
  document.getElementById("next-page-go").disabled = true;
}


function next_page_go() {
  page_number = page_number + 1;
  if (page_number == 1) {
    page_no_1();
  } else if (page_number == 2) {
    page_no_2();
  } else if (page_number == 3) {
    page_no_3();
  } else {
    page_no_4();
  }
  //document.location.reload();
}


function hamburgerMenu() {            //Hamburger Menu
  var x = document.getElementById("nav-bar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



function printProduct() {                // HTML print function
  $("#products").html(`
<article class="product">
<h3 id="product1-name">${all_products[product_no].productName}</h3>
<p>Here is a shot of this product that might entice a user to click and add it to their cart.</p>  
<header>
<img class="product-img" id="product1-img" src="${all_products[product_no].productImage}" alt="Product Image">
</header>
<form>
<fieldset class="product-field">
  <legend>Colours</legend>
  <ul>
    <li><label><input type="radio" name="colour" value="r"> <span id="product1-color1-text">${all_products[product_no].color1}</span></label></li>
    <li><label><input type="radio" name="colour" value="w"> <span id="product1-color2-text">${all_products[product_no].color2}</span></label></li>
    <li><label><input type="radio" name="colour" value="b"> <span id="product1-color3-text">${all_products[product_no].color3}</span></label></li>
  </ul>
</fieldset>

<fieldset class="product-field">
  <legend>Sizes</legend>
  <ol>
    <li><label><input type="radio" name="size" value="m"> <span id="product1-size1-text">${all_products[product_no].size1}</span></label></li>
    <li><label><input type="radio" name="size" value="l"> <span id="product1-size2-text">${all_products[product_no].size2}</span></label></li>
    <li><label><input type="radio" name="size" value="xl"> <span id="product1-size3-text">${all_products[product_no].size3}</span></label></li>
  </ol>
</fieldset>

<footer>
  <dl>
    <dt>Rating</dt>
    <dd class="product-rating">${all_products[product_no].rating} <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
  </dl>
  <data id="product1-price-val" value="${all_products[product_no].price}">
    <del>$50.00</del> 
    <ins id="product1-price-ins">$${all_products[product_no].price}</ins>
  </data>
  <button class="product-selection-btn" type="button">
    <span class="material-icons">add_shopping_cart</span> Add to Cart
  </button>
  <button class="product-selection-btn" type="button"><span class="material-icons">favorite</span></button>
  <a href="#">see more</a>
</footer>
</form>
</article>
`).append(
    `
  <article class="product">
<h3 id="product1-name">${all_products[product_no+1].productName}</h3>
<p>Here is a shot of this product that might entice a user to click and add it to their cart.</p>  
<header>
<img class="product-img" id="product1-img" src="${all_products[product_no+1].productImage}" alt="Product Image">
</header>
<form>
<fieldset class="product-field">
  <legend>Colours</legend>
  <ul>
    <li><label><input type="radio" name="colour" value="r"> <span id="product1-color1-text">${all_products[product_no+1].color1}</span></label></li>
    <li><label><input type="radio" name="colour" value="w"> <span id="product1-color2-text">${all_products[product_no+1].color2}</span></label></li>
    <li><label><input type="radio" name="colour" value="b"> <span id="product1-color3-text">${all_products[product_no+1].color3}</span></label></li>
  </ul>
</fieldset>

<fieldset class="product-field">
  <legend>Sizes</legend>
  <ol>
    <li><label><input type="radio" name="size" value="m"> <span id="product1-size1-text">${all_products[product_no+1].size1}</span></label></li>
    <li><label><input type="radio" name="size" value="l"> <span id="product1-size2-text">${all_products[product_no+1].size2}</span></label></li>
    <li><label><input type="radio" name="size" value="xl"> <span id="product1-size3-text">${all_products[product_no+1].size3}</span></label></li>
  </ol>
</fieldset>

<footer>
  <dl>
    <dt>Rating</dt>
    <dd class="product-rating">${all_products[product_no+1].rating} <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
  </dl>
  <data id="product1-price-val" value="${all_products[product_no+1].price}">
    <del>$50.00</del> 
    <ins id="product1-price-ins">$${all_products[product_no+1].price}</ins>
  </data>
  <button class="product-selection-btn" type="button">
    <span class="material-icons">add_shopping_cart</span> Add to Cart
  </button>
  <button class="product-selection-btn" type="button"><span class="material-icons">favorite</span></button>
  <a href="#">see more</a>
</footer>
</form>
</article>
  `).append(
    `
  <article class="product">
<h3 id="product1-name">${all_products[product_no+2].productName}</h3>
<p>Here is a shot of this product that might entice a user to click and add it to their cart.</p>  
<header>
<img class="product-img" id="product1-img" src="${all_products[product_no+2].productImage}" alt="Product Image">
</header>
<form>
<fieldset class="product-field">
  <legend>Colours</legend>
  <ul>
    <li><label><input type="radio" name="colour" value="r"> <span id="product1-color1-text">${all_products[product_no+2].color1}</span></label></li>
    <li><label><input type="radio" name="colour" value="w"> <span id="product1-color2-text">${all_products[product_no+2].color2}</span></label></li>
    <li><label><input type="radio" name="colour" value="b"> <span id="product1-color3-text">${all_products[product_no+2].color3}</span></label></li>
  </ul>
</fieldset>

<fieldset class="product-field">
  <legend>Sizes</legend>
  <ol>
    <li><label><input type="radio" name="size" value="m"> <span id="product1-size1-text">${all_products[product_no+2].size1}</span></label></li>
    <li><label><input type="radio" name="size" value="l"> <span id="product1-size2-text">${all_products[product_no+2].size2}</span></label></li>
    <li><label><input type="radio" name="size" value="xl"> <span id="product1-size3-text">${all_products[product_no+2].size3}</span></label></li>
  </ol>
</fieldset>

<footer>
  <dl>
    <dt>Rating</dt>
    <dd class="product-rating">${all_products[product_no+2].rating} <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
  </dl>
  <data id="product1-price-val" value="${all_products[product_no+2].price}">
    <del>$50.00</del> 
    <ins id="product1-price-ins">$${all_products[product_no+2].price}</ins>
  </data>
  <button class="product-selection-btn" type="button">
    <span class="material-icons">add_shopping_cart</span> Add to Cart
  </button>
  <button class="product-selection-btn" type="button"><span class="material-icons">favorite</span></button>
  <a href="#">see more</a>
</footer>
</form>
</article>
  `).append(
    `
  <article class="product">
<h3 id="product1-name">${all_products[product_no+3].productName}</h3>
<p>Here is a shot of this product that might entice a user to click and add it to their cart.</p>  
<header>
<img class="product-img" id="product1-img" src="${all_products[product_no+3].productImage}" alt="Product Image">
</header>
<form>
<fieldset class="product-field">
  <legend>Colours</legend>
  <ul>
    <li><label><input type="radio" name="colour" value="r"> <span id="product1-color1-text">${all_products[product_no+3].color1}</span></label></li>
    <li><label><input type="radio" name="colour" value="w"> <span id="product1-color2-text">${all_products[product_no+3].color2}</span></label></li>
    <li><label><input type="radio" name="colour" value="b"> <span id="product1-color3-text">${all_products[product_no+3].color3}</span></label></li>
  </ul>
</fieldset>

<fieldset class="product-field">
  <legend>Sizes</legend>
  <ol>
    <li><label><input type="radio" name="size" value="m"> <span id="product1-size1-text">${all_products[product_no+3].size1}</span></label></li>
    <li><label><input type="radio" name="size" value="l"> <span id="product1-size2-text">${all_products[product_no+3].size2}</span></label></li>
    <li><label><input type="radio" name="size" value="xl"> <span id="product1-size3-text">${all_products[product_no+3].size3}</span></label></li>
  </ol>
</fieldset>

<footer>
  <dl>
    <dt>Rating</dt>
    <dd class="product-rating">${all_products[product_no+3].rating} <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
  </dl>
  <data id="product1-price-val" value="${all_products[product_no+3].price}">
    <del>$50.00</del> 
    <ins id="product1-price-ins">$${all_products[product_no+3].price}</ins>
  </data>
  <button class="product-selection-btn" type="button">
    <span class="material-icons">add_shopping_cart</span> Add to Cart
  </button>
  <button class="product-selection-btn" type="button"><span class="material-icons">favorite</span></button>
  <a href="#">see more</a>
</footer>
</form>
</article>
  `).append(
    `
  <article class="product">
<h3 id="product1-name">${all_products[product_no+4].productName}</h3>
<p>Here is a shot of this product that might entice a user to click and add it to their cart.</p>  
<header>
<img class="product-img" id="product1-img" src="${all_products[product_no+4].productImage}" alt="Product Image">
</header>
<form>
<fieldset class="product-field">
  <legend>Colours</legend>
  <ul>
    <li><label><input type="radio" name="colour" value="r"> <span id="product1-color1-text">${all_products[product_no+4].color1}</span></label></li>
    <li><label><input type="radio" name="colour" value="w"> <span id="product1-color2-text">${all_products[product_no+4].color2}</span></label></li>
    <li><label><input type="radio" name="colour" value="b"> <span id="product1-color3-text">${all_products[product_no+4].color3}</span></label></li>
  </ul>
</fieldset>

<fieldset class="product-field">
  <legend>Sizes</legend>
  <ol>
    <li><label><input type="radio" name="size" value="m"> <span id="product1-size1-text">${all_products[product_no+4].size1}</span></label></li>
    <li><label><input type="radio" name="size" value="l"> <span id="product1-size2-text">${all_products[product_no+4].size2}</span></label></li>
    <li><label><input type="radio" name="size" value="xl"> <span id="product1-size3-text">${all_products[product_no+4].size3}</span></label></li>
  </ol>
</fieldset>

<footer>
  <dl>
    <dt>Rating</dt>
    <dd class="product-rating">${all_products[product_no+4].rating} <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
  </dl>
  <data id="product1-price-val" value="${all_products[product_no+4].price}">
    <del>$50.00</del> 
    <ins id="product1-price-ins">$${all_products[product_no+4].price}</ins>
  </data>
  <button class="product-selection-btn" type="button">
    <span class="material-icons">add_shopping_cart</span> Add to Cart
  </button>
  <button class="product-selection-btn" type="button"><span class="material-icons">favorite</span></button>
  <a href="#">see more</a>
</footer>
</form>
</article>
  `);
};

//