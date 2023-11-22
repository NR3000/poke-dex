import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default async function page({ params: { id } }) {

  const session = await getServerSession()

  console.log(session)

  if(!session) redirect(`/api/auth/signin`)

  try {
    const poke = await (fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, { cache: "no-store" }))
    const pokeData = await poke.json()
    // console.log("FrontPokdata", pokeData?.sprites?.other['official-artwork']?.front_default)
    const image = pokeData.sprites.other["official-artwork"].front_default

    return (
      <div className="poke-data-page">
        <div className="poke-card">
          <div className={`poke-card-image ${image ? "" : "p-8"}`}>
            <Image className="object-contain" src={image || "/default.png"} alt={pokeData.name} placeholder="blur" fill sizes="100" priority blurDataURL={"/default.png"} />
          </div>
          <div className="poke-data"><b>Name:</b> {pokeData.name.substr(0, 1).toUpperCase() + pokeData.name.substr(1)}</div>
          <div className="poke-data"><b>Weight:</b> {pokeData.weight} kg</div>
          <div className="poke-data"><b>Height:</b> {pokeData.height} cm</div>
          {
            pokeData.stats.map((ele) => (
              <div className="poke-data" key={ele.stat.name}>
                <b>{ele.stat.name.substr(0, 1).toUpperCase() + ele.stat.name.substr(1)}</b>: {ele.base_stat}
              </div>
            ))
          }
        </div>
        <div className="poke-card-stats-col">
          <div className="poke-card-stats">
            <header><b>Type:</b></header>
            <ul>
              {
                pokeData.types.map((ele) => <li key={ele.type.name}>{ele.type.name}</li>)
              }
            </ul>
          </div>
          <div className="poke-card-stats">
            <header><b>Abilities:</b></header>
            <ul>
              {
                pokeData.abilities.map((ele) => <li key={ele.ability.name}>{ele.ability.name}</li>)
              }
            </ul>
          </div>
          <div className="poke-card-stats">
            <header><b>Moves:</b></header>
            <div className="moves">
              {
                pokeData.moves.map((ele) => <span className="move" key={ele.move.name}>{ele.move.name}</span>)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
  catch (error) {
    // console.log(error)
    return (
      <div className="flex flex-col w-full h-screen items-center justify-center bg-slate-300 gap-8">
        {/* <div className="poke-data">{error.message}</div> */}
        <div className="text-3xl font-bold">Data Not found</div>
        <Link className="text-sm bg-slate-600 text-white px-4 py-2 rounded-lg" href={"/"}>Goto Home page</Link>
      </div>
    )
  }
}
