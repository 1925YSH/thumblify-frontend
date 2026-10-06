import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Show, RedirectToSignIn } from "@clerk/react";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/signup/*" element={<Signup />} />
        
        {/* Protected Route */}
        <Route 
          path="/generate" 
          element={
            <>
              <Show when="signed-in">
                <Generate />
              </Show>
              <Show when="signed-out">
                <RedirectToSignIn redirectUrl="/generate" />
              </Show>
            </>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
