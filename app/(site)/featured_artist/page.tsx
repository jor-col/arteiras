import Image from "next/image";
import { getArt } from "@/sanity/sanity-utils";

export default async function FeatArtist() {
  const mostRecent: any = await getArt();
  console.log(mostRecent.featured_artists[0].images);
  console.log("tets");

  return (
    <>
      <h1>{mostRecent.slug}</h1>
      {mostRecent.featured_artists.map((e: any) => {
        // console.log(e);
        return (
          <>
            {e.images.map((image: any) => (
              // <Image src={image.asset.url} alt="" width={100} height={100} />
              <div key={image + 7}>hi</div>
            ))}
            <p>{e.artist}</p>
          </>
        );
      })}
    </>
  );
}
