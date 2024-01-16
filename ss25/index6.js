let a = prompt("Nhập vào một số nguyên dương:");
a = parseInt(a);
let b= 0, c = 1, nextTerm;
for (let i = 3; i <= a; i++) {
    nextTerm = b+ c;
    b= c;
    c = nextTerm;
}

if (n === 1) {
    console.log(`Số Fibonacci thứ ${n} là: ${fib1}`);
} else {
    console.log(`Số Fibonacci thứ ${n} là: ${c}`);
}
