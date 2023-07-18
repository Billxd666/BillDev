import background from "../icons/bill.jpg";
function About() {
  return (
    /* Header */
    <div>
      <div class="flex items-center h-64">
        <p class="text-7xl mx-auto font-bold">Hola.</p>
      </div>
      {/* Description */}
      <div className="max-w-md mx-auto my-auto overflow-hidden md:max-w-full md:h-1/2">
        <div class="md:flex ">
          <div className="flex-shrink-0 h-auto w-auto ">
            <div
              class="h-48 mx-auto w-1/2 bg-no-repeat bg-contain md:h-full  md:w-64 rounded "
              style={{ backgroundImage: `url(${background})` }}
            ></div>
          </div>
          <div className="p-8 text-justify font-serif font-light md:text-2xl">
            <p class=" mb-5">
              Soy Billy, un desarrollador web backend y frontend, aunque
              actualmente estoy especializándome mucho mas en el backend ya que
              me gusta mucho mas
            </p>

            <p class="text-left">
              Siempre trato de como mejorar mi código, y la mayoría de mi tiempo
              libre es leer y practicar o incluso refactorizar el código de mis
              proyectos
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col mx-auto w-1/2 mt-7">
        <h2 class="font-semibold text-2xl  mb-7">Trabajo</h2>
        <p class="text-justify text-xl mb-7">
          Actualmente trabajo de freelance y estoy disponible para cualquier
          proyecto que tengas en mente o estoy libre para aplicar a una vacante.
        </p>

        <h2 class="font-semibold text-2xl mb-7">Blog </h2>
        <p class="text-justify text-xl mb-7">
          Me gusta escribir acerca de las que voy aprendiendo con el tiempo o en
          las que voy mejorando o descubriendo formas para mejorar en el
          desarrollo de software que estoy trabajando en un blog que disponible.
        </p>
      </div>
    </div>
  );
}

export default About;
