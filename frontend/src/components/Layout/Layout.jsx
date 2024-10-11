import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import RouteTour from "../../router/RouteTour";
import { AuthContext } from "../../context/authContext";
import AdminNavbar from "../navbar/AdminNavbar";

const Layout = ({ children }) => { // Accept children as props
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // Determine which Navbar to show
  const showAdminNavbar = [
    "/admin", "/users", "/tours", 
    "/hotels", "/vehicle", "/train", 
    "/adduser", "/userpage", "/update"
  ].includes(location.pathname);

  return (
    <div>
      {showAdminNavbar ? <AdminNavbar /> : <Navbar />}
      <RouteTour />
      <main>{children}</main> {/* Render child components here */}
      <Footer />
    </div>
  );
};

export default Layout;
