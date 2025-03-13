import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";


const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "20px" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
