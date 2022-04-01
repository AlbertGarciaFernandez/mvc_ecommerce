import React, { createContext, useReducer, useEffect }from 'react'

// initialstate local storage? cartItems: json  parse localstorage
const initialState = {
    cartItems: JSON.parse(localStorage.getItem(CART_ITEMS)) ,
}

const CartContext = createContext(initialState);

const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const DELETE_CART = "DELETE_CART";

function CartReducer(state, action) {
  const { cartItems } = state;

  switch (action.type) {
    case ADD_ITEM: {
      const { _id: productId, quantity } = action.payload;
      const prevCartItem = cartItems.find((item) => item._id === productId);

      if (prevCartItem) {
        const modifiedCartItems = cartItems.map((item) => {
          if (item._id === productId) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          }
          return item;
        });

        return { ...state, cartItems: modifiedCartItems };
      }

      return { ...state, cartItems: [...cartItems, action.payload] };
    }

    case REMOVE_ITEM: {
      const updatedCart = cartItems.filter(
        (item) => item._id !== action.payload,
      );

      return { ...state, cartItems: updatedCart };
    }
    case UPDATE_QUANTITY: {
      const foundIndex = cartItems.findIndex(
        (x) => x._id === action.payload._id,
      );
      cartItems[foundIndex] = action.payload;

      return { ...state, cartItems: [...cartItems] };
    }
    case DELETE_CART:
      return { cartItems: [] };

    default:
      return state;
  }
}

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  //useffect localstorage json stringify state cartitems
  useEffect(() => {
  localStorage.setItem(CART_ITEMS, JSON.stringify(state.cartItems));
  }, [state]);
  

  function addItemContext(data) {
    dispatch({
      type: "ADD_ITEM",
      payload: data,
    });
  }

  function removeItemContext(productId) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: productId,
    });
  }

  function updateQuantityContext(data) {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: data,
    });
  }

  function deleteCartContext() {
    dispatch({
      type: "DELETE_CART",
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addItemContext,
        removeItemContext,
        updateQuantityContext,
        deleteCartContext,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
