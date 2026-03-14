
const coupons={SAVE10:0.1,MEGA20:0.2}

function applyCoupon(code,total){
if(coupons[code]){
return total-(total*coupons[code])
}
return total
}
