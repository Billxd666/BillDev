import logo1 from "../icons/gologo.png";
import logo2 from "../icons/ginLogo.svg";
import logo3 from "../icons/reactLogo.svg";
import logo4 from "../icons/tailwind1.svg";
import logo5 from "../icons/SassLogo.svg";
import logo6 from "../icons/typescript (1).svg";
import logo7 from "../icons/nodeLogo.svg";
import logo8 from "../icons/expressjslogo.svg";

function Content_Homepage() {
  return (
<div>
<section className="flex-col md:flex md:flex-row justify-around h-auto py-20 bg-blues text-white">
      <div className="basis-1/4">
        <div className="text-center">
          <img className="w-24 mx-auto py-4" src={logo3} />
          <p className="py-4"> React</p>
          <p className="py-4">
            Creo interfaces por componentes para mantener mi trabajo limpio y
            ordenado
          </p>
        </div>
      </div>
      <div className="basis-1/4">
          <div className="text-center">
          <img className="w-24 mx-auto py-4" src={logo4}  />
          <p className="py-4"> React</p>
          <p className="py-4">
            Creo interfaces por componentes para mantener mi trabajo limpio y
            ordenado
          </p>
          </div>
      </div>
      <div className="basis-1/4">
      <div className="text-center">
          <img className="w-24 mx-auto py-4" src={logo5} />
          <p className="py-4"> React</p>
          <p className="py-4">
            Creo interfaces por componentes para mantener mi trabajo limpio y
            ordenado
          </p>
          </div>
      </div>
    </section>

      
    <section className=" flex-col md:flex md:flex-row justify-around h-auto py-20">
      <div className="basis-1/4">
        <div className="text-center">
          <img className="w-24 mx-auto py-4" src={logo1} />
          <p className="py-4"> React</p>
          <p className="py-4">
            Creo interfaces por componentes para mantener mi trabajo limpio y
            ordenado
          </p>
        </div>
      </div>
      <div className="basis-1/4">
          <div className="text-center">
          <img className="w-24 mx-auto " src={logo2} />
          <p className="py-4"> React</p>
          <p className="py-4">
            Creo interfaces por componentes para mantener mi trabajo limpio y
            ordenado
          </p>
          </div>
      </div>

    </section>

    <section className="flex-col md:flex md:flex-row justify-around h-auto py-20 bg-blues text-white">
      <div className="basis-1/4">
        <div className="text-center">
          <img className="w-24 mx-auto py-4" src={logo6} />
          <p className="py-4"> React</p>
          <p className="py-4">
            Creo interfaces por componentes para mantener mi trabajo limpio y
            ordenado
          </p>
        </div>
      </div>
      <div className="basis-1/4">
          <div className="text-center">
          <img className="w-24 mx-auto py-4" src={logo7} />
          <p className="py-4"> React</p>
          <p className="py-4">
            Creo interfaces por componentes para mantener mi trabajo limpio y
            ordenado
          </p>
          </div>
      </div>
      <div className="basis-1/4">
      <div className="text-center">
          <img className="h-24 mx-auto py-4" src={logo8} />
          <p className="py-4"> React</p>
          <p className="py-4">
            Creo interfaces por componentes para mantener mi trabajo limpio y
            ordenado
          </p>
          </div>
      </div>
    </section>
</div>

    
  );
}

export default Content_Homepage;
