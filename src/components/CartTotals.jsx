import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUBTOTAL */}
        <div className="flex justify-between text-xs border-b border-base-200 pb-2">
          <span>Subtotal</span>
          <span className="font-md">{formatPrice(cartTotal)}</span>
        </div>
        {/* SHIPPING */}
        <div className="flex justify-between text-xs border-b border-base-200 pb-2">
          <span>shipping</span>
          <span className="font-md">{formatPrice(shipping)}</span>
        </div>
        {/* TAX */}
        <div className="flex justify-between text-xs border-b border-base-200 pb-2">
          <span>Tax</span>
          <span className="font-md">{formatPrice(tax)}</span>
        </div>
        {/* ORDER_TOTAL */}
        <div className="flex justify-between text-sm mt-4 pb-2">
          <span>Total</span>
          <span className="font-md">{formatPrice(orderTotal)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
