let a=+prompt("Nhap vao so nguyen a bat ki: ");
let b=+prompt("Nhap vao so nguyen b bat ki: ");
let tong=0;
if(a<b){
for(let i=a+2; i<b-2;i++){
    console.log(i);
    tong+=i;
    }
    console.log(tong);
}else{
    console.log("Kh hop le");
}


