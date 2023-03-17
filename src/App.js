import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import axios from "axios";

import Header from "./components/global/Header/Header";
import Footer from "./components/footer";
import Cart from "./pages/cart";
import Home from "./pages/home";
import BuildProfile from "./pages/BuildProfile";
import FormulatePlan from "./pages/formulatePlan";
import ChooseVendor from "./pages/ChooseVendor";
import VendorDetails from "./pages/VendorDetails";
import OrderConfirmation from "./pages/OrderConfirmation";
import ThankYou from "./pages/ThankYou";

import signupLogin from "./pages/login";
import support from "./pages/support";
import about from "./pages/about";
import contact from "./pages/contact";
import partner from "./pages/partner";
import userDashboard from "./pages/userDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import userDashboardTicketing from "./pages/userDashboardTicketing";
import TicketDetails from "./pages/TicketDetails";
import UserDashboardInvoice from "./pages/UserDashboardInvoice";
import AccountSettings from "./pages/AccountSettings";
import OrderPlaced from "./pages/OrderPlaced";
import SideBar from "./components/SideBar";
import VendorDashboardTags from "./pages/vendorDashboardTags";
import FAQ from "./pages/FAQ";

function App() {
  const vendorGetReq = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_INIL_URL}/tags/viewTags`
      );
      const res1 = await axios.get(
        `${process.env.REACT_APP_INIL_URL}/category/viewCategory`
      );

      window.localStorage.setItem(
        "vendorTags",
        JSON.stringify(res.data?.success.data)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    vendorGetReq();
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect
          exact
          from="/create-meal-plan"
          to="/create-meal-plan/build-profile"
        />
        <Route
          exact
          path="/create-meal-plan/build-profile"
          component={BuildProfile}
        />
        <Route
          exact
          path="/create-meal-plan/formulate-plan"
          component={FormulatePlan}
        />
        <Route
          exact
          path="/create-meal-plan/choose-vendor"
          component={ChooseVendor}
        />
        <Route
          exact
          path="/create-meal-plan/vendor-details/:vendor"
          component={VendorDetails}
        />
        <Route
          exact
          path="/create-meal-plan/order-confirmation"
          component={OrderConfirmation}
        />
        <Route exact path="/create-meal-plan/thank-you" component={ThankYou} />
        <Route exact path="/partner-with-us" component={partner} />
        <Route exact path="/about" component={about} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/login-signup" component={signupLogin} />
        <Route exact path="/user-dashboard" component={userDashboard} />
        <Route exact path="/vendor-dashboard" component={VendorDashboard} />
        <Route
          exact
          path="/vendor-dashboard/Tags"
          component={VendorDashboardTags}
        />
        <Route exact path="/support" component={support} />
        <Route
          path="/user-dashboard-ticketing"
          component={userDashboardTicketing}
        />
        <Route path="/ticket-details" component={TicketDetails} />
        <Route path="/dashboard-invoice" component={UserDashboardInvoice} />
        <Route path="/account-settings" component={AccountSettings} />
        <Route path="/order-placed" component={OrderPlaced} />
        <Route path="/cart" component={Cart} />
        <Route path="/FAQ" component={FAQ} />
      </Switch>

      <Footer
        className={
          window.location.pathname === "/user-dashboard" ? "d-none" : ""
        }
      />
    </BrowserRouter>
  );
}

export default App;
