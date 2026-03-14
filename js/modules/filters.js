
let filtered=[...products]

function searchProducts(){
let t=document.getElementById("search").value.toLowerCase()
filtered=products.filter(p=>p.name.toLowerCase().includes(t))
renderProducts(filtered)
}

function filterCategory(cat){
if(cat==="all"){filtered=[...products]}
else{filtered=products.filter(p=>p.category===cat)}
renderProducts(filtered)
}

function sortProducts(type){
if(type==="price_low")filtered.sort((a,b)=>a.price-b.price)
if(type==="price_high")filtered.sort((a,b)=>b.price-a.price)
if(type==="rating")filtered.sort((a,b)=>b.rating-a.rating)
renderProducts(filtered)
}

function applyPriceFilter(){
let min=document.getElementById("minPrice").value||0
let max=document.getElementById("maxPrice").value||99999
filtered=products.filter(p=>p.price>=min && p.price<=max)
renderProducts(filtered)
}

function applyRatingFilter(r){
filtered=products.filter(p=>p.rating>=r)
renderProducts(filtered)
}
