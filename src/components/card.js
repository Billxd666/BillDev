import logo1 from "../icons/gologo.png";

const tools = {
  name: "react",
  description: "Creo interfaces por componentes para mantener mi trabajo limpio y ordenado",
  
};

const tools2 = [
    {
        nombre : "react",
        descripcion : "Creo interfaces por componentes para mantener mi trabajo limpio y ordenado",
        image : "logo1"
    }
]

function Card() {
  return (
    <div>
      <p>{tools.name}</p>
      <p>{tools.description}</p>
      <img src={logo1}></img>
    </div>
  );
}

export default Card;
