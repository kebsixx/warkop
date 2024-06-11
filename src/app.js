document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta Brazil", img: "1.jpg", price: 20000 },
      { id: 2, name: "Cappuccino", img: "2.jpg", price: 25000 },
      { id: 3, name: "Aceh Gayo", img: "3.jpg", price: 15000 },
      { id: 4, name: "Primo Passo", img: "4.jpg", price: 30000 },
      { id: 5, name: "Sumatra Mandheling", img: "5.jpg", price: 5000 },
    ],
  }));
});
