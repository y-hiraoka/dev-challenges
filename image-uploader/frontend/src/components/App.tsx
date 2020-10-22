import React from "react";
import { Container as MuiContainer, makeStyles } from "@material-ui/core";
import { UploadCard } from "./UploadCard";
import { Uploading } from "./Uploading";
import { uploadImages } from "../apis/images";
import { UploadedCard } from "./UploadedCard";
import { Image } from "../models/image";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

type UploadState = "waiting" | "uploading" | "uploaded";

type ComponentProps = {
  uploadState: UploadState;
  uploadFile: (files: File[]) => void;
  images: Image[];
};

const Component: React.FCX<ComponentProps> = function ({ uploadState, uploadFile ,images}) {
  const classes = useStyles();

  return (
    <MuiContainer maxWidth="sm" className={classes.root}>
      {uploadState === "waiting" && <UploadCard uploadFile={uploadFile} />}
      {uploadState === "uploading" && <Uploading />}
      {uploadState === "uploaded" && <UploadedCard fileId={images[0]?.fileId}  />}
    </MuiContainer>
  );
};

const Container: React.FCX = function (props) {
  const [uploadState, setUploadState] = React.useState<UploadState>("waiting");
  const [uploadedImages, setUploadedImages] = React.useState<Image[]>([]);

  const uploadFile = React.useCallback(async (files: File[]) => {
    setUploadState("uploading");

    const images = await uploadImages(files);
    setUploadedImages(images);

    setUploadState("uploaded");
  }, []);

  return (
    <Component
      uploadState={uploadState}
      uploadFile={uploadFile}
      images={uploadedImages}
    />
  );
};

export { Container as App };
