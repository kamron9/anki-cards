import { Outlet } from "react-router-dom";
import BottomMenu from "./Menu/BottomMenu";
import Sidebar from "./Menu/Sidebar";
import TopHeader from "./Menu/TopHeader";

const Layout = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full">
        <TopHeader />
        <Outlet />
      </div>
      <BottomMenu />
    </div>
  );
};

export default Layout;
