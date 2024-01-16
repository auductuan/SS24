let n = +prompt("Nhập vào một số nguyên dương:");
n = parseInt(n);
let a = 0;
let b = 0;
let c = 1;

for (let i = 1; i <= n; i++) {
    b = b * Math.pow(10, Math.floor(Math.log10(i)) + 1) + i;
    
    a += b;
}
console.log(`Giá trị của biểu thức S là: ${S}`);
