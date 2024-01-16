let n=+prompt("Nhap 1 so nguyen duong bat ki ");
if(n<=0){
    console.log("kh hop le");
}else{
    let m= 0;
    while (n>0) {
        m = n%10 + m*10;
        m= Math.floor(m/ 10);
    }console.log("So dao nguoc la" +m);
}