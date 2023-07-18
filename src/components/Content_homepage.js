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
            <p className="py-4 text-lg font-semibold"> React</p>
            <p className="py-4">
              Creo interfaces por componentes para mantener mi trabajo limpio y
              ordenado
            </p>
          </div>
        </div>
        <div className="basis-1/4">
          <div className="text-center">
            <img className="w-24 mx-auto py-4" src={logo4} />
            <p className="py-4 text-lg font-semibold "> Tawilwind css</p>
            <p className="py-4">
              Actualmente como framework principal de css uso tailwind por su
              facilidad de crear una interfaz de usuario de calidad
            </p>
          </div>
        </div>
        <div className="basis-1/4">
          <div className="text-center">
            <img className="w-24 mx-auto py-4" src={logo5} />
            <p className="py-4 text-lg font-semibold"> Sass</p>
            <p className="py-4">
              Si se busca un diseño mas especifico uso sass como preprocesador
              de css
            </p>
          </div>
        </div>
      </section>

      <section className=" flex-col md:flex md:flex-row justify-around h-auto py-20">
        <div className="basis-1/4">
          <div className="text-center">
            <img className="w-24 mx-auto py-4" src={logo1} />
            <p className="py-4 text-lg font-semibold"> Golang</p>
            <p className="py-4">
              Por ahora me estoy dedicando mas a este lenguaje por su manejo de
              memoria y con un enfoque mas a los microservicios
            </p>
          </div>
        </div>
        <div className="basis-1/4">
          <div className="text-center">
            <img className="w-24 mx-auto " src={logo2} />
            <p className="py-4 text-lg font-semibold"> Gin</p>
            <p className="py-4">
              Como framework http uso gin gonic por su rendimiento que presume
              tener
            </p>
          </div>
        </div>
      </section>

      <section className="flex-col md:flex md:flex-row justify-around h-auto py-20 bg-blues text-white">
        <div className="basis-1/4">
          <div className="text-center">
            <img className="w-24 mx-auto py-4" src={logo6} />
            <p className="py-4 text-lg font-semibold"> Typescript</p>
            <p className="py-4">
              Typescript a mi parecer es muy util al mejorar javascript con su
              verificador de tipo estatico y asi no generar problemas en
              proyectos mas grandes //Proximamente este sitio se va a migrar a
              Typescript y react
            </p>
          </div>
        </div>
        <div className="basis-1/4">
          <div className="text-center">
            <img className="w-24 mx-auto py-4" src={logo7} />
            <p className="py-4 text-lg font-semibold"> Node js</p>
            <p className="py-4">
              Otra herramienta que uso es nodejs para crear api junto con
              express js
            </p>
          </div>
        </div>
        <div className="basis-1/4">
          <div className="text-center">
            <img className="h-24 mx-auto py-4" src={logo8} />
            <p className="py-4 text-lg font-semibold"> Express js</p>
            <p className="py-4">
              Express es uno de mis framework web preferidos para usar junto con
              node js por su estilo minimalista
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content_Homepage;
