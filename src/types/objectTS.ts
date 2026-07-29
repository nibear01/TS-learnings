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

//assigning order type
type addressType = "default" | "selected" | "temporary";
type item = { name: string; size: string; price: number };
type address = { street_name: string; house_no: string; type: addressType };

type order = {
  ordId: string;
  items: item[];
  address: address;
};

function orderProduct(ord: order) {
  return ord;
}

const order1: order = {
  ordId: "ord1",
  items: [],
  address: { street_name: "Cantonment", house_no: "3/A", type: "default" },
};
console.log(orderProduct(order1));

/* 
output: 
{
 ordId: 'ord1',
 items: [],
 address: { street_name: 'Cantonment', house_no: '3/A', type: 'default' }
}
*/


type user = {name: string, age: number, gender: string}

//PARTIAL OBJ IN TS
function partialUpdate(updates: Partial<user>) {
  console.log(`updating user ${updates.name}`); //'updating user Naved'
}

partialUpdate({name: "Naved"})
//REQUIRED OBJ IN TS
function requiredUpdate(updates: Required<user>) {
  console.log(`updating user ${updates.name}`); //'updating user Naved'
}
requiredUpdate({name: "Naved", age: 25, gender: "Male"}); 
// all the fields of the user object are required to be passed in the function otherwise it will give an error.


//PICK OBJ IN TS
function pickUpdate(updates: Pick<user, "name" | "age">) {
  console.log(`updating user ${updates.name} and age ${updates.age}`); //'updating user Naved and age 25'
}
pickUpdate({name: "Naved", age: 25}); 
// only the specified fields of the user object are required to be passed in the function otherwise it will give an error.
// used less in real life but can be used in some cases where we want to pick only some fields of an object and pass it to a function.


//OMIT OBJ IN TS
function omitUpdate(updates: Omit<user, "gender">) {
  console.log(`updating user ${updates.name} and age ${updates.age}`); //'updating user Naved and age 25'
}
omitUpdate({name: "Naved", age: 25});
// we can omit the specified fields of the user object and pass it to a function otherwise it will give an error.

