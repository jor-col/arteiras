import { GetServerSideProps } from "next";
import { InstagramEmbed } from "react-social-media-embed";

type Data = {
  instagram: any;
};

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (
  context
) => {
  const res = await fetch("https://www.instagram.com/arteirasgallery/");
  const data: Data = await res.json();

  return {
    props: {
      data,
    },
  };
};
