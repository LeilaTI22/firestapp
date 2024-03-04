import Link from "next/link"

const Navegacion = () => {
  return (
    <nav className="  flex justify-between p-5 bg-indigo-950 text-white">
        <div>
            <h2 className=" text-4xl uppercase font-black "><a href="./">Leila</a></h2>
        </div>
        <div className=" flex flex-row  text-xl">
            <Link href="./inicio"><p className="hover:text-red-600 transition-colors" >Inicio</p></Link>
            <Link href="./sobre"><p className="ml-10 hover:text-red-600 transition-colors">Sobre Mi</p></Link>
            <Link href="./contacto"><p className="ml-10 hover:text-red-600 transition-colors">Contacto</p></Link>
        </div>
    </nav>
  )
}

export default Navegacion
