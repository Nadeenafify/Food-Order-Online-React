import { makeAutoObservable } from "mobx";

class CartStore {
  cart = [];

  constructor() {
    makeAutoObservable(this);
  }

  addElementMobx(element) {
    const existingItem = this.cart.find(item => item._id === element._id);

    if (existingItem) {
      // Update quantity of the existing item
      existingItem.quantity += 1;
    } else {
      // Add new item with quantity 1
      this.cart.push({ ...element, quantity: 1 });
    }
  }

  removeElementMobx(element) {
    // Remove item from cart
    this.cart = this.cart.filter(item => item._id !== element._id);
  }
}

const cartStore = new CartStore();
export default cartStore;
