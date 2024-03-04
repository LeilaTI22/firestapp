"use client"


import Image from "next/image";
import FotoLeila from  "../src/img/photo.jpeg"
import FotoMoto from "../src/img/bmw.webp"
import Link from "next/link";
import { Contador } from "./components/Contador";

export default function Home() {
  return (
    <main className="">
      
      <div >
        <div className="  text-center flex flex-col justify-center items-center ">
          <Image
            src={FotoLeila}
            width={500}
            height={500}
            alt="Imagen leila"
            className=" mt-10  mb-10 rounded-full "
          />
          <h2 className="text-4xl animate-bounce mb-40">Janet Leilani Carapia Hernádez</h2>
        </div>
      </div>

      <div className=" text-center flex flex-col justify-center items-center">
        <Image 
          src={FotoMoto}
          width={750}
          height={500}
          alt="Foto de BMW S1000RR"
          className="mb-3 rounded-lg shadow-2xl"
        />

        <div>
          <p className="  text-xl font-bold">Me encantan las motos, mi sueño siempre ha sido tener una BMW S1000RR</p>
          <Link
           href="https://www.bmw-motorrad.com.mx/es/models/sport/s1000rr.html"
           
           ><p className="  text-blue-800 mb-5">
            ¡Visita la página de la moto dado click aqui!
            </p>
            
          </Link>
        </div>

        <Contador/>
            
      </div>
    </main>
  );
}
