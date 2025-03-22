

const initialState = {
    cart: [],
  };
  
  // Reducer function
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const existingItem = state.cart.find(item => item._id === action.payload._id);

        if (existingItem) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item._id === action.payload._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
        }

        case 'REMOVE_ITEM': {
          return {
            ...state,
            cart: state.cart
              .map(item =>
                item._id === action.payload._id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              )
              .filter(item => item.quantity > 0), // Remove item if quantity reaches 0
          };
        }
        case 'CLEAR_CART': {
          return {
            ...state,
            cart: []
        }
        }
      default:
        return state;
    }
  };
  
  export default cartReducer;
  