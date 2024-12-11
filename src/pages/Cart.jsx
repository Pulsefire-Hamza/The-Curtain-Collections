import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const parsePrice = (price) => {
    if (!price) return 0;
    const cleanedPrice = price.toString().replace(/[^0-9.-]+/g, "");
    return parseFloat(cleanedPrice) || 0;
  };

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const itemPrice = parsePrice(item.price);
        return total + itemPrice * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    const totalPrice = calculateTotalPrice();
    navigate("/checkout", { state: { cartItems, totalPrice } });
  };

  return (
    <div className="container mx-auto py-12 px-4 pt-20"> {/* Added pt-20 for padding from top */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center pt-16">
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Your cart is currently empty.
        </p>
      ) : (
        <div className="space-y-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-white rounded-lg shadow-md border border-gray-200"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/4 flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover rounded-lg"
                  style={{ maxWidth: "150px" }}
                />
              </div>

              {/* Item Details */}
              <div className="w-full md:w-1/2">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-gray-700 font-medium mt-2">
                  Rs. {parsePrice(item.price).toFixed(2)} x {item.quantity}
                </p>
              </div>

              {/* Quantity and Remove Section */}
              <div className="w-full md:w-1/4 flex items-center justify-between gap-4 md:gap-6">
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition"
                  >
                    -
                  </button>
                  <span className="mx-2 text-gray-800 font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price Section */}
          <div className="flex justify-between items-center bg-gray-100 p-6 rounded-lg shadow-sm">
            <span className="text-xl font-bold text-gray-800">Total:</span>
            <span className="text-2xl font-extrabold text-green-600">
              Rs. {calculateTotalPrice()}
            </span>
          </div>

          {/* Checkout Button */}
          <div className="text-center">
            <button
              className="bg-green-500 text-white py-3 px-6 rounded-lg font-bold text-lg shadow-lg hover:bg-green-600 transition duration-300"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
