import { Outlet } from "react-router-dom";
import BottomNavBar from "./components/bottom-navigation-bar";

export default function App() {
  return (
    <>
      <Outlet />
      <BottomNavBar />
    </>
  );
}
