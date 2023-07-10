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
              Soy Billy, un desarrollador web backend y frontend, soy un
              apasionado de la tecnologia y siempre estoy actualizandome para
              pensar fuera de la caja
            </p>

            <p class="mb-5">
              Cuento con conocimientos en javascript, typescript, html, css,
              tailwind css, sass, node js y git.
            </p>

            <p class="mb-5">
              Actualmente me estoy especializando en frameworks como React en el
              frontend con typescript y Golang en el backend.
            </p>

            <p class="text-left">
              Mi enfoque es escribir codigo simple y limpio para problemas
              complejos con un alto rendimiento.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col mx-auto w-1/2 mt-7">
        <h2 class="font-semibold text-2xl  mb-7">Trabajo</h2>
        <p class="text-justify text-xl mb-7">
          Actualmente trabajo de freelance y estoy disponible para cualquier
          proyecto que tengas en mente
        </p>

        <h2 class="font-semibold text-2xl mb-7">Blog </h2>
        <p class="text-justify text-xl mb-7">
          Me gusta escribir acerca de las tecnologias que voy aprendiendo con el
          tiempo o en las que voy mejorando o descubriendo formas para mejorar
          en el desarrollo de software, asi que estoy trabajando en un blog que
          estara disponible proximamente.
        </p>
      </div>
    </div>
  );
}

export default About;
