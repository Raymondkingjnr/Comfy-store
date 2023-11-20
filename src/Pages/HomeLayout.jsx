import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";

const HomeLayout = () => {
  const navigate = useNavigation();
  const isPageLoading = navigate.state === "loading";

  return (
    <div>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </div>
  );
};

export default HomeLayout;
