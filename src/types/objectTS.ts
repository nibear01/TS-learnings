// declaring a object type for a product

// let tShirt = {
//   name: "T-Shirt",
//   price: 29.99,
//   color: "blue",
//   size: "M"
// };
// problem: we can assign any datatypes in tShirt object so fix is declaring the types first

let tShirt: { name: string; price: number; color: string; size: string };

tShirt = {
  name: "T-Shirt",
  price: 29.99,
  color: "blue",
  size: "M",
};
// now if we try to assign a wrong datatype to any property of tShirt object, it will give an error.

// aliasing a object type for a product

type product = {
  name: string;
  price: number;
  sizes: string[];
  isAvailable: boolean;
};

const shoes: product = {
  name: "Boy's Shoes",
  price: 49.99,
  sizes: ["38", "39", "40"],
  isAvailable: true,
};

const bag: product = {
  name: "Girl's Bag",
  price: 29.99,
  sizes: ["S", "M", "L"],
  isAvailable: false,
};
