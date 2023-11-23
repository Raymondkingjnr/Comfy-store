import React from "react";
import { useSelector } from "react-redux";
import { CartItemList, CartTotals, SectionTitle } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  // Temp

  const user = null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle text="Your Cart Is Empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>

        <div className="lg:col-span-4 lg:p-4">
          <CartTotals />
          {user ? (
            <Link to={"/checkout"} className="btn btn-primary btn-block mt-8">
              proceed to check out
            </Link>
          ) : (
            <Link to={"/login"} className="btn btn-primary btn-block mt-8">
              login to checkout
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
