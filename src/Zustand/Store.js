import { create } from "zustand";

const useStore = create((set) => ({
  cartt: [],
  addElement: (element) =>
    set((state) => {
      const existingItem = state.cartt.find((item) => item._id === element._id);

      if (existingItem) {
        return {
          cartt: state.cartt.map((item) =>
            item._id === element._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          cartt: [...state.cartt, { ...element, quantity: 1 }],
        };
      }
    }),

    removeElement: (element) =>
        set((state) => ({
          cartt: state.cartt // Spread `state.cart` correctly
            .map((item) =>
              item._id === element._id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0), // Remove item if quantity reaches 0
        })),
      
}));

export default useStore;
