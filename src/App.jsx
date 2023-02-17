import React from "react";
import TheHeader from "./components/TheHeader";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <TheHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
