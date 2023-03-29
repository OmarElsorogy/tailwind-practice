import "./App.css";
import cn from "classnames";
import Header from "./components/Header";
import Sidebar from "./components/ui/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { useState, useContext } from "react";
import { ThemeContext } from "./contexts/UIContext";

function App() {
  const themeContext = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebarHandler = () => {
    setIsSidebarOpen((value) => !value);
  };
  const [isShrunk, setShrunk] = useState(false);

  return (
    <>
      <Header toggleSidebar={toggleSidebarHandler} />
      <main
        className={cn("flex w-full", {
          "bg-primary text-white": themeContext.appTheme == "dark",
          "bg-white text-primary": themeContext.appTheme == "light",
        })}
      >
        <Sidebar
          isShrunk={isShrunk}
          setShrunk={setShrunk}
          className={cn({
            "top-0 z-10 left-0 duration-300": isSidebarOpen,
            "lg:left-0 -left-full duration-300": !isSidebarOpen,
          })}
        />
        <Home
          className={cn({
            "w-[calc(100vw-240px)]": !isShrunk,
            "w-[calc(100vw-50px)]": isShrunk,
          })}
        />
      </main>
      <div
        onClick={toggleSidebarHandler}
        className={cn({
          "absolute right-0 top-0 w-full h-full bg-white opacity-30 duration-900":
            isSidebarOpen,
        })}
      ></div>
    </>
  );
}

export default App;
