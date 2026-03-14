
function addReview(id){
let r=prompt("Write review")
if(!r)return
let reviews=storage.get("reviews")||[]
reviews.push({product:id,review:r})
storage.set("reviews",reviews)
alert("Review saved")
}
