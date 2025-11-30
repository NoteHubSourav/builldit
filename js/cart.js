function addToCart(name, price){
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  cart.push({name,price});
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Item added to cart");
}

function loadCart(){
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  let output="",total=0;
  cart.forEach(item=>{
    output+=`<p>${item.name} - ₹${item.price}</p>`;
    total+=item.price;
  });
  document.getElementById("cart-items").innerHTML=output;
  document.getElementById("total").innerText="Total: ₹"+total;
}

function clearCart(){
  localStorage.removeItem("cart");
  alert("Order Placed Successfully!");
  location.reload();
}

function searchProducts(){
  let input=document.getElementById("searchInput").value.toLowerCase();
  let products=document.querySelectorAll(".product");
  products.forEach(product=>{
    let name=product.querySelector("h3").innerText.toLowerCase();
    product.style.display=name.includes(input)?"block":"none";
  });
}

function filterProducts(){
  let value=document.getElementById("priceFilter").value;
  let products=document.querySelectorAll(".product");
  products.forEach(product=>{
    let price=parseInt(product.getAttribute("data-price"));
    if(value==="low" && price>500) product.style.display="none";
    else if(value==="high" && price<=500) product.style.display="none";
    else product.style.display="block";
  });
}

function toggleDarkMode(){
  document.body.classList.toggle("dark");
}
