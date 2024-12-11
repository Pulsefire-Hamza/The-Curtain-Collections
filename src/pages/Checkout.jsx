import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Checkout() {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    paymentMethod: 'cash', // Only one payment method: Cash on Delivery
  });
  
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(''); // For error handling

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address || !formData.phoneNumber) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);

    // Construct the message
    const message = `
      *Order Details*
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Address: ${formData.address}, ${formData.city}, ${formData.postalCode}
      Phone: ${formData.phoneNumber}
      Items: ${cartItems.map(item => `${item.name} (x${item.quantity}): Rs. ${parseFloat(item.price.replace(/[^0-9.-]+/g, '')).toFixed(2)}`).join(', ')}
      Total Price: Rs. ${totalPrice}
      Payment Method: Cash on Delivery
    `;

    // WhatsApp link
    const whatsappLink = `https://wa.me/923054122637?text=${encodeURIComponent(message)}`;

    try {
      // Redirect to WhatsApp
      window.open(whatsappLink, '_blank');
    } catch (error) {
      setError('Failed to open WhatsApp. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Secure Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Shipping Information Form */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4"
                required
              />
            </div>
            {/* Payment Method */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                  checked
                  readOnly
                  className="mr-2"
                />
                <label htmlFor="cash" className="text-sm text-gray-700">Cash on Delivery</label>
              </div>
            </div>
            <button
              type="submit"
              className={`w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-md shadow-sm ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Place Order'}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                  style={{ maxWidth: '100px' }}
                />
                <span className="flex-1 ml-4">{item.name} x {item.quantity}</span>
                <span>Rs. {parseFloat(item.price.replace(/[^0-9.-]+/g, '')).toFixed(2)}</span>
              </div>
            ))
          )}
          <div className="flex justify-between text-lg font-bold mt-6">
            <span>Total</span>
            <span>Rs. {totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
