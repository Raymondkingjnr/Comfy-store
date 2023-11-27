import React from "react";
import { Form, redirect } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatPrice } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";
import Input from "./Input";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      numItemsInCart,
      cartItems,
    };

    try {
      const resp = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      store.dispatch(clearCart());
      toast.success("Orders Placed Successfully");
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There was an Error Placing Your order";
      toast.error(errorMessage);

      if (error.response.status === 401) {
        return redirect("/login");
      }

      return null;
    }
  };

const CheckOutForm = () => {
  return (
    <>
      <Form method="POST" className="flex flex-col gap-y-5">
        <h4 className="font-medium text-xl capitalize">shipping information</h4>
        <Input label="first name" name="name" type="text" />
        <Input label="address" name="address" type="text" />
        <div className="mt-4">
          <SubmitBtn text="place your order" />
        </div>
      </Form>
    </>
  );
};

export default CheckOutForm;
