import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom/client";
import TodoContainer from "./functionBased/components/TodoContainer";
import "./functionBased/App.css";
import NotMatch from "./functionBased/pages/NotMatch";
import About from "./functionBased/pages/About";
import Navbar from "./functionBased/components/Navbar";
import SinglePage from "./functionBased/pages/SinglePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<TodoContainer />} />
        <Route exact path="/about/singlepage" element={<SinglePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
