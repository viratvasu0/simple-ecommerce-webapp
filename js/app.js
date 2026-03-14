
let filtered=[...products]

function renderProducts(){
const grid=document.getElementById("productGrid")
grid.innerHTML=""

filtered.forEach(p=>{
let div=document.createElement("div")
div.className="card"
div.onclick=()=>{
window.location="pages/product.html?id="+p.id
}

div.innerHTML=`
<img src="${p.image}">
<h3>${p.name}</h3>
<p>$${p.price}</p>
<p>⭐ ${p.rating}</p>
`

grid.appendChild(div)
})
}

function searchProducts(){
let t=document.getElementById("search").value.toLowerCase()
filtered=products.filter(p=>p.name.toLowerCase().includes(t))
renderProducts()
}

renderProducts()
