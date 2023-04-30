// "use client";
// import { useEffect, useState } from "react";
import { Dropbox } from "dropbox";
// import "dotenv/config";
const REACT_APP_DROPBOX_API =
  "sl.Bdcp7_Nd2TnsmJCQjO0CIOOY4Dl2INFDfVjoFSJBGgWr4uA2RwR_FtUjvej6xNx5-x_Aj3UVRxOTVL0gMbmz5Fua4bZ7CEu8krRufkf_AazwqAnvaCPO74Ya4MzwUcA2CPKCuPw";

// const { REACT_APP_DROPBOX_API } = process.env;
const dbx = new Dropbox({ accessToken: REACT_APP_DROPBOX_API, fetch });

// export default async function getStaticProps() {
//   const IGImages = dbx
//     .filesListFolder({ path: "/IFTTT/Instagram" })
//     .then((data) => {
//       console.log("photos from dbx", data);
//       return data;
//     })
//     .catch((err) => console.error("ERROR DBX FETCH", err));
//   return IGImages;
// }
