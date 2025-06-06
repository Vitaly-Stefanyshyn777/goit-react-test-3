import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import HomePage from "./page/HomePage";
import Navigation from "./components/Navigation";
import { useRefresh } from "./api/useMutation";
import { useEffect } from "react";
import ContactPage from "./page/ContactPage";

function App() {
  const { mutate: refresh } = useRefresh();
  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<HomePage />} path="/"></Route>
        <Route element={<LoginPage />} path="/login"></Route>
        <Route element={<RegisterPage />} path="/register"></Route>
        <Route element={<ContactPage />} path="/contact"></Route>
      </Routes>
    </>
  );
}

export default App;
