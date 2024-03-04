import Image from "next/image"
import Foto from  "../../src/img/photo.jpeg"

const page = () => {
  return (
    <main className="h-screen">
      <div className=" grid grid-cols-2 justify-center items-center justify-items-center p-16">

      <div>
        <p className="text-lg ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit alias at facere cupiditate, quo officia veritatis modi nisi delectus sint qui saepe repellendus porro itaque deleniti natus facilis quis debitis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit alias at facere cupiditate, quo officia veritatis modi nisi delectus sint qui saepe repellendus porro itaque deleniti natus facilis quis debitis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit alias at facere cupiditate, quo officia veritatis modi nisi delectus sint qui saepe repellendus porro itaque deleniti natus facilis quis debitis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit alias at facere cupiditate, quo officia veritatis modi nisi delectus sint qui saepe repellendus porro itaque deleniti natus facilis quis debitis.
        </p>
      </div>

      <div>
        <Image
          src={Foto}
          width={500}
          height={500}
          alt="Imagen leila"
          className=" mt-10  mb-10 rounded-lg "
        />
      </div>

      </div>
    </main>
  )
}

export default page
