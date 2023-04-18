import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WelcomeScreen from "./components/WelcomeScreen";
import SharedLayout from "./components/SharedLayout";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [welcome, setWelcome] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setWelcome(false);
  //   }, 8500);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);
  // if (welcome) return <WelcomeScreen welcome={welcome} />;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
