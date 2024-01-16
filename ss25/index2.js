let a = prompt("nhap a:");
let b = prompt("nhap b:");
a = parseInt(a);
b = parseInt(b);
if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    console.log("nhập hai số nguyên dương hợp lệ");
} else {
    let c = 0
    let d = 0;;
    for (let i = a + 1; i < b; i++) {
        if (i%2==0) {
            d += i;
        } else {
           c += i;
        }
    }
    console.log("tong le: " + c);
    console.log("tong chan: " + d);
}

