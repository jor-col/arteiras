import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config"
import { Art } from "@/types/Art";

// export const getArt = async (): Promise<Art[]> => {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "art"] | order(_createdAt) {}`
//   );
// };