"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//genric
function identityThree(val) {
    return val;
}
identityThree(3);
function identityFour(val) {
    return val;
}
//returns a single product
function getSearchProduct(products) {
    return products[0];
}
//returns an array
function getSearchProduct2(products) {
    return products;
}
// arrow function syntax
const getMoreSearchProduct = (products) => {
    return products;
};
function generics(val1, val2) {
    return {
        val1,
        val2,
    };
}
generics(3, 'mido');
//second parameter cannot be a string
function generics1(val1, val2) {
    return {
        val1,
        val2,
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
