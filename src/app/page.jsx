import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import Link from "next/link"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 4)

  return (
    <>
      {/* Anime terpopuler */}
      <section>
        <Header title='Paling Populer' linkTitle='Lihat Semua' linkHref='/populer' />
        <AnimeList api={topAnime} />
      </section>

      {/* Anime Rekomendasi */}
      <section>
        <Header title='Rekomendasi' />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  )
}

export default Page
