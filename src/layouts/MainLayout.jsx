import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#f5f8fc]">
      <div className="mx-auto max-w-[1820px] px-4 sm:px-8 lg:px-10">
        <Navbar />
        <main className="pt-6">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
