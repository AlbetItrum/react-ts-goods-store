import "../style.css";
import Navigation from "../Navigation/Navigation";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="section-cart">
      <div className="section-cart-header">
        <div className="container">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default App;
