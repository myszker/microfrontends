interface ProductInterface {
  id: string;
  label: string;
  stock: number;
  price: number;
}

const productsData: ProductInterface[] = [
  { id: "1", label: "Olive oil", stock: 83, price: 45 },
  { id: "2", label: "Wine", stock: 1354, price: 23 },
  { id: "3", label: "Bacon", stock: 76, price: 73 },
  { id: "4", label: "Potatoes", stock: 654, price: 5 },
  { id: "5", label: "Chocolate", stock: 900, price: 7 },
  { id: "6", label: "Donuts", stock: 888, price: 6 },
  { id: "7", label: "Orange juice", stock: 125, price: 40 },
  { id: "8", label: "Coffee", stock: 678, price: 77 },
  { id: "9", label: "Salt", stock: 323, price: 6 },
  { id: "10", label: "Pepper", stock: 999, price: 3 },
];

export { ProductInterface, productsData };
