import Image from "next/image";
import { getArt } from "@/sanity/sanity-utils";

export default async function FeatArtist() {
  const mostRecent: any = await getArt();
  console.log(mostRecent);

  return (
    <>
      <h1>{mostRecent.slug}</h1>
      {mostRecent.featured_artists.map((e: any) => {
        // console.log(e);
        return (
          <>
            {/* {e.images.map((image: any) => <Image src={image} alt='' />)} */}
            <p>{e.artist}</p>
          </>
        );
      })}
    </>
  );
}
