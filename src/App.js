import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";

function App() {
  return (
    <div>
      <Layout>
        <h1>Welcome to Pizzetta!</h1>
        <PizzaBuilder />
      </Layout>
    </div>
  );
}

export default App;
