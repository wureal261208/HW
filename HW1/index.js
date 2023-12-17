// ++Count & Count++:
// VD1: a=1, b=7
let a = 1;
let b = 7;
b = ++a; // b=1+a => b=1+1 => b=2
a = b++ + ++a; // a=(b+1 => 2+1=3) + (1+a => 1+1=2) => a=3+2=5
console.log(a);

// VD2: d=6, c =5
let d = 6;
let c = 5;
c = d++; //c=d+1 => c=6+1 => d=7
d = ++d + c++; //d= (1+d => 1+7=8) + (c+1 => 5+1=6) => d=8+6=14
console.log(d);



// Loop:
// VD1: n = 10 và total = 0 in ra total = ?
let VD1 = "";
for(let n = 10; n <= 30; n++) {
    if(n % 2 == 0) {
        VD1 += 0 + " ";
}
}
// n={10, 12, 13, ..., 30}
// n/2 =>n = {30, 28, 26,...., 14, 12, 10} = 11 đơn vị
// VD1=0 nên nó loop tất cả = 0 + khoảng trống [""]
console.log(VD1)

//VD2: total = 0 và in ra total = ?
let VD2 = "";
for(let i = 1; i <= 10; i++) {
    if(i % 1 == 0) {
        VD2 += 0 + " ";
}
}
// i={1, 2, 3, 4, ....., 10}
// i/1 => i = {1, 2, 3, 4, 5, ...10} = 10 đơn vị
// VD2=0 nên nó loop tất cả = 0 + khoảng trống [""]
console.log(VD2)

// VD3: i = 1; i <=5 và j = 1; j <=5 in ra j và i
let VD3 = "";
for(let i = 1; i <= 5; i++) {
    if(i % 1 == 0) {
        VD3 += 0 + " ";
}
}
// i={1, 2, 3, 4, 5}
// i/1 => i = {1, 2, 3, 4, 5} = 5 đơn vị
// VD3=0 nên nó loop tất cả = 0 + khoảng trống [""]

for(let j = 1; j <= 5; j++) {
    if(j % 1 == 0) {
        VD3 += 1 + " ";
}
}
// i={1, 2, 3, 4, 5}
// i/1 => i = {1, 2, 3, 4, 5} = 5 đơn vị
// VD3=1 nên nó loop tất cả = 1 + khoảng trống [""]
console.log(VD3)