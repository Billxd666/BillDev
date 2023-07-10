import { Link } from "react-router-dom";
import { Navrouter } from "./Arreglos";

function Navxl() {
  return (
    <div>
      <nav className="flex sm:justify-center space-x-5 px-3 text-left md:cursor-pointer">
        {Navrouter.map(([title, url]) => (
          <div>
            <Link
            to={url}
            className="py-7 rounded-lg px-3  text-black font-medium hover:bg-green hover:text-gray-50  "
            >
            {title}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Navxl;
