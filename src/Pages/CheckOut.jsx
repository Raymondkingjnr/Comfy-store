import React from "react";
import { CartTotals, CheckOutForm, SectionTitle } from "../components";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You must be logged in");
    return redirect("/login");
  }

  return null;
};

const CheckOut = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) {
    return <SectionTitle text="Your Cart Is Empty" />;
  }

  return (
    <section>
      <SectionTitle text="place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckOutForm />
        <CartTotals />
      </div>
    </section>
  );
};

export default CheckOut;
