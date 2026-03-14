
let cart=storage.get("cart")||[]

function addToCart(id){
let p=products.find(x=>x.id===id)
cart.push(p)
storage.set("cart",cart)
updateCartCount()
analytics.track("add_to_cart",p.name)
}

function updateCartCount(){
document.getElementById("cartCount").innerText=cart.length
}

function openCart(){
document.getElementById("cartModal").style.display="block"
renderCart()
}

function closeCart(){
document.getElementById("cartModal").style.display="none"
}

function renderCart(){
const list=document.getElementById("cartItems")
list.innerHTML=""
let total=0
cart.forEach(p=>{
let li=document.createElement("li")
li.innerText=p.name+" $"+p.price
list.appendChild(li)
total+=p.price
})
document.getElementById("cartTotal").innerText="Total: $"+total
}
