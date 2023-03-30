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

function generics<T, U>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

generics(3,  'mido')


//second parameter cannot be a string

function generics1<T, U extends number>(val1: T, val2: U): object {
    return {
      val1,
      val2,
    };
  }

  //generics1(3,  'mido')


  interface Quiz{
      name: string,
      type: string
  }

  interface Course{
      name: string
      author: string
      subject: string
  }

  class Sellable<T>{
     public cart: T[] = []
     
     addToCart(product: T): void{
         this.cart.push(product);

     }
  }