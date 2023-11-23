import Image from "next/image";

export default function loading() {
  return (
    <div className="w-full h-[calc(100vh_-_48px)] flex justify-center items-center bg-slate-200">
        <Image src={"/loader.png"} width={100} height={100} alt="loader" className="animate-spin"/>
    </div>
  )
}
