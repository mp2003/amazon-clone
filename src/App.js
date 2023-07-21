import React from "react";
import NavbarUpper from "./component/NavbarUpper";
import NavbarLower from "./component/NavbarLower";
import WallpaperCarosuel from "./component/WallpaperCarosuel";
import './App.css';
import CardLayout from "./component/CardLayout";
const App = () => {
  return (
    <>
      <header>
        <NavbarUpper />
        <NavbarLower />
      </header>
      <main>
        <WallpaperCarosuel />
        <CardLayout />
      </main>
    </>
  );
};

export default App;
