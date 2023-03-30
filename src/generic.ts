const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

//genric

function identityThree<type>(val: type): type {
  return val;
}

identityThree(3);

function identityFour<T>(val: T): T {
  return val;
}

//returns a single product
function getSearchProduct<T>(products: T[]): T {
  return products[0];
}

//returns an array
function getSearchProduct2<T>(products: T[]): T[] {
  return products;
}

// arrow function syntax
const getMoreSearchProduct = <T>(products: T[]): T[] => {
  return products;
};
