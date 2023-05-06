"use client";
import { useEffect, useState } from "react";
// import getStaticProps from "./utils/getStaticProps";

const DropboxImages = (): JSX.Element => {
  const [dbxImages, setDbxImages] = useState();

  // useEffect(() => {
  //   setDbxImages((): any => {
  //     return getStaticProps();
  //   });
  // }, []);

  return (
    <div>
      <div>Dropbox Images</div>
    </div>
  );
};

export default DropboxImages;
