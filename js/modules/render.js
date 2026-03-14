
function renderProducts(list=products){
const grid=document.getElementById("productGrid")
grid.innerHTML=""
list.forEach(p=>{
let div=document.createElement("div")
div.className="card"
div.innerHTML=`
<img src="${p.image}">
<h3>${p.name}</h3>
<p>$${p.price}</p>
<p>⭐ ${p.rating}</p>
<button onclick="addToCart(${p.id})">Add Cart</button>
<button onclick="addToWishlist(${p.id})">Wishlist</button>
<button onclick="addReview(${p.id})">Review</button>
`
grid.appendChild(div)
})
}
