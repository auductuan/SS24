let a = prompt("Nhập vào một số nguyên:");
a = parseInt(a);
let countEvenbs = 0;

while (a !== 0) {
    let b = a % 10;

    if (b % 2 === 0) {
        countEvenbs++;
    }
    a = Math.floor(a / 10);
}
console.log(`Số lượng chữ số chẵn trong ${a} là: ${countEvenbs}`);
