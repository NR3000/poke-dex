import Link from 'next/link'

export default function notFound() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-slate-300 gap-8">
      <div className="text-3xl font-bold">Global Data Not found</div>
      <Link className="text-sm bg-slate-600 text-white px-4 py-2 rounded-lg" href={"/"}>Goto Home page</Link>
    </div>
  )
}
