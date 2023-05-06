import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { InstagramEmbed } from "react-social-media-embed";
import styles from "./page.module.css";

// const getInsta = async () => {
//   const response = await fetch(
//     "https://www.instagram.com/arteirasgallery/?__a=1" // <-- fetch profile in JSON
//   )
//     .then((response) => {
//       if (response.ok) {
//         response
//           .arrayBuffer()
//           .then((body) => {
//             const text = new TextDecoder("utf-8").decode(body); // <-- dumbest, lowest level parse I could figure out...
//             const data = JSON.parse(text);
//             console.log("TEXT DECODER", data);
//           })
//           .catch((err) => console.error("error parsing response body:", err));
//         // console.log("insta fetch", response);
//         // const text = response.text();
//         // console.log("JSON data:", text);
//         // const data = JSON.parse(text as any);
//         // console.log("promise resolved?", data);
//       } else {
//         console.error("failed to fetch Instagram data:", response.status);
//       }
//     })
//     .catch((err) => console.error("insta fetch error", err));
// };

type Data = {
  instagram: any;
};

const getServerSideProps: GetServerSideProps<{ data: Data }> = async (
  // <-- should "prefetch" somehow?
  // <-- trying this from Next Docs...
  context
) => {
  const res = await fetch("https://www.instagram.com/arteirasgallery/"); // <-- raw fetch from insta endpoint
  const data: Data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const regex =
  '/(?i)<script[[:space:]]+type="text/JavaScript"(.*?)>([^a]+?)</script>/si';

export default function Feed({}: // data,
InferGetServerSidePropsType<typeof getServerSideProps>) {
  // getInsta(); // <-- my bootleg fetch function w/o api
  return (
    <div>
      <h1>Instagram Feed Here</h1>
      <div className={styles.container}>
        {/* <InstagramEmbed // <-- this component works perfectly...
          url="https://www.instagram.com/arteirasgallery/" // <-- but it imports a React Class component which is forbidden on server side
          width={328} // <-- problem is we get CORS and security errors when fetching with "use client" side...
        /> */}
      </div>
    </div>
  );
}
