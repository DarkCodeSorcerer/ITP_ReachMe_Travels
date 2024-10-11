import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout/Layout";
import ComplaintForm from "./pages/Complain/ComplaintForm";  // Adjust the import path if necessary
import ComplaintProcess from "./pages/Complain/Process";
import ComplaintDetails from "./pages/Complain/ComplaintDetails"
import FeedbackForm from "./pages/Feedback/FeedbackForm";  // Adjust the import path if necessary
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/complaint-form" element={<ComplaintForm />} />  {/* Set the default route to ComplaintForm */}
          <Route path="/complaint-process" element={<ComplaintProcess />} />  {/* Route to ComplaintProcess */}
          <Route path="complaint-details" element={<ComplaintDetails />}/>
          <Route path="/feedback" element={<FeedbackForm/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
