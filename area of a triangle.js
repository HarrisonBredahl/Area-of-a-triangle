function triangleArea(side1, side2, side3) {
    let s = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    return area;
}
let side1 = 5;
let side2 = 6;
let side3 = 7;
let area = triangleArea(side1, side2, side3);
let round = parseFloat(area.toFixed(1));
document.write("The area of a triangle is: " + round);
