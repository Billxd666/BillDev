import { useState } from "react";
import { Navrouter } from "./Arreglos";
import { Link } from "react-router-dom";
import Navxl from "./Navxl";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <p className="md:cursor-pointer">bill_dev</p>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8">
          <Navxl />
        </ul>
        <ul
          className={`md:hidden bg-gray-100 fixed w-full top-0 overflow-y-auto bottom-0 py-20 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <div>
            <nav className="px-3">
              {Navrouter.map(([title, url]) => (
                <div>
                  <div className="text-left md:cursor-pointer h-7">
                    <Link
                      to={url}
                      onClick={() => setOpen(!open)}
                    >
                      {title}
                    </Link>
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
