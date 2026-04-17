import { FaChartPie, FaClock, FaHouse } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Navbar() {
  const links = [
    { id: 1, name: "Home", path: "/", icon: <FaHouse size={14} /> },
    { id: 2, name: "Timeline", path: "/timeline", icon: <FaClock size={14} /> },
    { id: 3, name: "Stats", path: "/stats", icon: <FaChartPie size={14} /> },
  ];

  return (
    <nav className="-mx-4 border-b border-[#e7edf5] bg-white shadow-[0_1px_0_rgba(17,24,39,0.04)] sm:-mx-8 lg:-mx-10">
      <div className="mx-auto flex max-w-[1820px] flex-col gap-3 px-6 py-5 md:flex-row md:items-center md:justify-between lg:px-10">
        <NavLink to="/" className="text-[30px] font-bold tracking-[-0.04em] text-[#233142]">
          KeenKeeper
        </NavLink>

        <div className="flex flex-wrap gap-4 md:justify-end">
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold transition ${
                  isActive
                    ? "bg-[#245445] text-white"
                    : "text-[#60708a] hover:bg-[#f4f7fb] hover:text-[#233142]"
                }`
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
