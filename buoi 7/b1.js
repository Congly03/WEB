// đề : Sử dụng kiến thức về toán tử gán và toán tử số học để tạo các biến a, b, c, d thỏa mãn các yêu cầu sau đây:
// a là 1 số dương
// b là 1 số âm
// c là kết quả của a + b
// d là kết quả của a - b

// Tạo biến a là một số dương bằng cách sử dụng toán tử gán và toán tử số học
let a = Math.abs(Math.floor(Math.random() * 100) + 1); // Số nguyên dương ngẫu nhiên từ 1 đến 100

// Tạo biến b là một số âm bằng cách sử dụng toán tử gán và toán tử số học
let b = -Math.abs(Math.floor(Math.random() * 100)); // Số nguyên âm ngẫu nhiên từ -1 đến -100

// Tính toán c và d
let c = a + b;
let d = a - b;

// In ra các giá trị với mô tả tương ứng
console.log("a là một số dương:", a);
console.log("b là một số âm:", b);
console.log("c là kết quả của a + b:", c);
console.log("d là kết quả của a - b:", d);
