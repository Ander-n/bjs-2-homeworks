﻿function parseCount (num) {
    let num1 = Number.parseFloat(num);
    if(Number.isNaN(num1)) {
        throw new Error("Невалидное значение");
    }
    else {
        return num1;
    }
}

function validateCount(num) {
    try {
        return parseCount(num);
    }
    catch(err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        if(((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        else {
            this.a = a;
            this.b = b;
            this.c = c;
    }
}   

get perimeter() {
    let p = (this.a + this.b + this.c);
    return p;
}

get area () {
    let p = (this.a + this.b + this.c) / 2;
    let ar = Math.round(1000 * Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) + Number.EPSILON) / 1000;
    return ar;
    }
}

function getTriangle (a, b, c) {
    try {
        let trg = new Triangle(a, b, c);
        return trg;
    }
    catch (error) {
        let err = {
            get perimeter() {
               return "Ошибка! Треугольник не существует";
            },
            get area() {
               return "Ошибка! Треугольник не существует";
            }
        }
        return err;
    }
    finally {
    }
}    