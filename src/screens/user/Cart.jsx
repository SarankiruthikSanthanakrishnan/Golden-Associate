import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, clearCart, subtotal } =
    useCart();

  const deliveryCharge = subtotal > 0 ? 120 : 0;
  const grandTotal = subtotal + deliveryCharge;

  if (cartItems.length === 0) {
    return (
      <div className="ga-container pb-12 pt-14">
        <section className="ga-panel border-slate-200 bg-white/90 backdrop-blur-md p-10 text-center shadow-lg">
          <h1 className="text-3xl font-bold text-slate-900">
            Your cart is empty
          </h1>
          <p className="mt-3 text-base text-slate-500">
            Add products from shop to continue checkout.
          </p>
          <button
            className="mt-8 rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 px-8 py-3.5 text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition duration-300"
            onClick={() => navigate('/shop')}
            type="button"
          >
            Go to Shop
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="ga-container pb-12 pt-10">
      <section className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-900 ga-text-gradient">Your Cart</h1>
        <button
          onClick={clearCart}
          className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-100 transition duration-300"
          type="button"
        >
          Clear Cart
        </button>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <article
              key={item.id}
              className="ga-panel border-slate-200 bg-slate-50 backdrop-blur-md grid gap-5 p-5 md:grid-cols-[110px_1fr_auto] md:items-center hover:bg-slate-100 transition duration-300"
            >
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-full object-contain filter drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)]"
                />
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900 md:text-lg">
                  {item.name}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Rs. {item.price.toLocaleString()} each
                </p>
                <p className="mt-3 text-sm font-bold text-blue-700">
                  Item Total: Rs. {(item.price * item.quantity).toLocaleString()}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 mt-4 md:mt-0">
                <div className="flex items-center rounded-lg border border-slate-300 bg-slate-50 overflow-hidden">
                  <button
                    className="h-9 w-9 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    type="button"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-slate-900">
                    {item.quantity}
                  </span>
                  <button
                    className="h-9 w-9 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    type="button"
                  >
                    +
                  </button>
                </div>
                
                <button
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-rose-200 text-rose-600 hover:bg-rose-100 transition"
                  onClick={() => removeFromCart(item.id)}
                  type="button"
                  title="Remove from cart"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="ga-panel h-fit border-slate-200 bg-white/90 backdrop-blur-xl p-6 sticky top-24">
          <h2 className="text-lg font-extrabold text-slate-900 pb-4 border-b border-slate-200">Order Summary</h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex items-center justify-between text-slate-600">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-900">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span>Delivery</span>
              <span className="font-semibold text-slate-900">Rs. {deliveryCharge.toLocaleString()}</span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 text-lg font-extrabold text-slate-900">
              <span>Total</span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                Rs. {grandTotal.toLocaleString()}
              </span>
            </div>
          </div>

          <button
            className="mt-8 w-full rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 py-3.5 text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition duration-300"
            type="button"
          >
            Proceed to Checkout
          </button>
          <button
            className="mt-3 w-full rounded-xl border border-slate-300 bg-slate-50 py-3.5 text-sm font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition duration-300"
            onClick={() => navigate('/shop')}
            type="button"
          >
            Continue Shopping
          </button>
        </aside>
      </section>
    </div>
  );
};

export default Cart;
