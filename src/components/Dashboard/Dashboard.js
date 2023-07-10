const scrollDown = () => {
  window.scrollTo ({
    top:700,
    behavior:"smooth"
  })
}

function Dashboard() {
  return (
    <div className="py-20 ">
      <div className="text-center">
        <p className="text-blues font-serif font-semibold text-2xl ">
          Soy es Billy
        </p>
        <p className="font-bold text-slate-900 text-4xl">
          Creo paginas web y aplicaciones multiplataforma
        </p>
        <p className=" text-slate-800 font-extralight text-3xl">
          Soy desarrollador fullstack de paginas web y programador de
          aplicaciones multiplataforma{" "}
        </p>

        <div className="w-40 p-2 flex mx-auto pt-4">
          <button onClick={scrollDown} className="transition duration-150 ease-out py-2 px-4 border-2 border-greens text-slate-800 font-medium hover:-translate-y-1 bg-white hover:text-slate-900  ">
            Explorar
          </button>
        </div>
        
      </div>


      
    </div>
  );
}

export default Dashboard;
