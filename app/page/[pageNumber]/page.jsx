
import { getServerSession } from "next-auth"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import ExportButton from "../../../components/ExportButton"

// export async function getServerSideProps(){
//     const pokemonList = await (await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page) * 20}&limit=20`)).json()
//     return {props: {pokemonList}}
// }

export default async function page({ params: { pageNumber } }) {
    const page = pageNumber - 1

    const session = await getServerSession()

    if (!session) redirect(`/api/auth/signin`)

    try {
        console.log(session)
        if (Number.isNaN(page)) throw new Error("No data found.")
    } catch (error) {
        notFound()
    }

    const pokemonList = await (await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page) * 20}&limit=  `, { cache: "no-store" })).json()
    const totalPages = Math.round(pokemonList.count / 20)

    // console.log("Hello ", process.env.NEXTAUTH_SECRET)

    const pageCount = Array(Math.ceil(pokemonList.count / 20)).fill(0).map((e, i) => i + 1)
    // console.log("current page", page, page <= totalPages)

    const excelData = pokemonList.results
    const excelHeader = ["Pokemon", "Links"]

    return (
        <>
            {
                pokemonList.results.length === 0 ?
                    <div className="flex flex-col w-full h-screen items-center justify-center bg-slate-300 gap-8">
                        <div className="text-3xl font-bold">Data Not found</div>
                        <Link className="text-sm bg-slate-600 text-white px-4 py-2 rounded-lg" href={"/"}>Goto Home page</Link>
                    </div>
                    :
                    <div className="poke-list-page">
                        <div className="poke-list-page-header">
                            <h1 className="header">Pokemon List</h1>
                            <ExportButton fileName={"PokeList-" + pageNumber} header={excelHeader} data={excelData} />
                        </div>
                        <table className="poke-list">
                            <tbody>
                                <tr className="poke-list-row">
                                    <th className="poke-list-srno-title">Sr. No.</th>
                                    <th className="poke-list-name-title">Name</th>
                                </tr>
                                {
                                    pokemonList.results.map((pokemon, ind) => {
                                        const srno = (page * 20) + ind + 1
                                        const name = pokemon.name.substr(0, 1).toUpperCase() + pokemon.name.substr(1)
                                        return (
                                            <tr key={srno} className="poke-list-row">
                                                <td className="poke-list-srno">{srno}</td>
                                                <td className="poke-list-name"><Link href={`/pokemon/${srno}`}>{name}</Link></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="page-nav-button-container">
                            <Link className="page-nav" scroll={false} href={page > 0 ? `/page/${page}` : "#"}>Prev</Link>
                            <div className="pages-info">Page {page + 1} of {totalPages}</div>
                            <Link className="page-nav" scroll={false} href={page < (totalPages - 1) ? `/page/${(page + 1) + 1}` : "#"}>Next</Link>
                        </div>
                        <section className="inline-flex flex-col mx-auto w-1/2 max-md:w-full">
                            <h3 className="p-1 w-full text-center font-bold">Pages</h3>
                            <div className="page-number-container">
                                {pageCount.map(number => <Link className="page-number" href={`/page/${number}`} key={number}>{number} </Link>)}
                            </div>
                        </section>
                    </div>
            }
        </>
    )
}
