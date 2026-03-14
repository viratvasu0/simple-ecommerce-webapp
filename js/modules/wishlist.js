
let wishlist=storage.get("wishlist")||[]

function addToWishlist(id){
let p=products.find(x=>x.id===id)
wishlist.push(p)
storage.set("wishlist",wishlist)
}

function openWishlist(){
document.getElementById("wishlistModal").style.display="block"
let list=document.getElementById("wishlistItems")
list.innerHTML=""
wishlist.forEach(p=>{
let li=document.createElement("li")
li.innerText=p.name
list.appendChild(li)
})
}

function closeWishlist(){
document.getElementById("wishlistModal").style.display="none"
}
