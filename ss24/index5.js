let b(n) {
    let a = 0;
    for (let i = 1; i <= n; i++) {
        a += 1 / Math.pow(i, 3);
    }
    return a.toFixed(5); 
}
let n = +prompt("Nhập vào số nguyên dương n:");

if (n >= 1) {
    const result = b(n);
    console.log("Kết quả biểu thức S = 1 + 1/2^3 + 1/3^3 + ... + 1/${n}^3 là:" ${result});
} else {
    console.log(" Vui lòng nhập lại!");
}   
