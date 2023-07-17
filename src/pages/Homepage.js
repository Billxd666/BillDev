import Content_Homepage from "../components/Content_homepage";
import Dashboard from "../components/Dashboard/Dashboard";
import background from "..//icons/back.png"

function Homepage() {
  return (
    <div >
      <div style={{backgroundImage: `url(${background})` }}>
      <section id="sec1" className="py-0 md:py-40 border-b-4  ">
        <div >
        <Dashboard />
        </div>
      </section>
      </div>

      <section id="sec2">
        <div className="text-center py-48 border-b-4 " >
          <p className="font-bold text-2xl">
            Aplicaciones web rapidas y confiables
          </p>
          <p>
            Mi objetivo es crear soluciones con el mejor rendimiento posible
          </p>
        </div>
        <Content_Homepage />
      </section>
    </div>
  );
}

export default Homepage;
