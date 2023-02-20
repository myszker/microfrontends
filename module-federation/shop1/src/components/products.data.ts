interface ProductInterface {
  id: string;
  label: string;
  stock: number;
  price: number;
}

const productsData: ProductInterface[] = [
  { id: "1", label: "Bread", stock: 164, price: 5 },
  { id: "2", label: "Soda", stock: 831, price: 3 },
  { id: "3", label: "Cheese", stock: 50, price: 24 },
  { id: "4", label: "Cookies", stock: 230, price: 12 },
  { id: "5", label: "Tomatoes", stock: 500, price: 9 },
  { id: "6", label: "Beer", stock: 100, price: 6 },
  { id: "7", label: "Peanuts", stock: 67, price: 10 },
];

export { ProductInterface, productsData };
