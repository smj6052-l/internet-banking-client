import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Outlet />
      <div>하단 네비게이션 바</div>
    </>
  );
}
