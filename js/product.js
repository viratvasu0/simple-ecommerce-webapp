
const params=new URLSearchParams(window.location.search)
const id=parseInt(params.get("id"))

const product=products.find(p=>p.id===id)

document.getElementById("productImg").src=product.image
document.getElementById("productName").innerText=product.name
document.getElementById("productPrice").innerText="$"+product.price
document.getElementById("productDesc").innerText=product.description

let reviews=JSON.parse(localStorage.getItem("reviews_"+id))||[]

function loadReviews(){
const list=document.getElementById("reviewList")
list.innerHTML=""
reviews.forEach(r=>{
let div=document.createElement("div")
div.className="review"
div.innerText=r
list.appendChild(div)
})
}

function addReview(){
let text=document.getElementById("reviewText").value
if(!text)return

reviews.push(text)
localStorage.setItem("reviews_"+id,JSON.stringify(reviews))
document.getElementById("reviewText").value=""
loadReviews()
}

loadReviews()
