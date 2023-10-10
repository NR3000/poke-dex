import Image from "next/image";

export default function loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <Image src={"/loader.png"} width={100} height={100} alt="loader" className="animate-spin"/>
    </div>
  )
}
