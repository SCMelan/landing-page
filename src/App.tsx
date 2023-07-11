import React from "react";
import { Footer } from "./components/footerComp/footerComponent";
import { Header } from "./components/headerComp/headerComponent";
import { Main } from "./components/mainComp/mainComponent";
import "./scss/app.scss";

function App() {
  return (
    <div className="Body">
      <Header />
      <Footer />
      <Main />
    </div>
  );
}

export default App;
