import { getArtBySlug } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function FeatArtist(req: any) {
  const { slug } = req.params
  const artist: any = await getArtBySlug(slug)
  console.log(artist[0])
  return (
    <>
      {artist[0].featured_artists.map((e: any, i: number) => (
        <div key={`${i + e.artist}`}>
          {e.images.map((image: any) =>
            <Image key={image.asset.url} src={image.asset.url} alt='' width={100} height={100} />
          )}
          <p>{e.artist}</p>

        </div>
      ))}
    </>
  )
}
