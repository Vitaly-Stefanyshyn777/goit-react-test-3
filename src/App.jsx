import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import HomePage from "./page/HomePage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<HomePage />} path="/"></Route>
        <Route element={<LoginPage />} path="/login"></Route>
        <Route element={<RegisterPage />} path="/register"></Route>
      </Routes>
    </>
  );
}

export default App;
