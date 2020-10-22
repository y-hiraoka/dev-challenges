import React from "react";
import clsx from "clsx";
import { useDropzone } from "react-dropzone";
import { makeStyles, Typography } from "@material-ui/core";
import Image from "./DnDArea.jpg";

const useStyles = makeStyles(
  theme => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      padding: "3rem",
      borderRadius: "1em",
      border: `2px dashed ${theme.palette.primary.main}`,
      outline: "none",
    },
    fileInput: { outline: "none" },
    rootOnDrag: { borderWidth: "4px" },
    text: { fontSize: "1.3em", marginTop: "2em", color: theme.palette.grey[400] },
    image: {
      width: "60%",
    },
  }),
  {},
);

type ComponentProps = {
  onDrop: (files: File[]) => void;
};

const Component: React.FCX<ComponentProps> = function (props) {
  const classes = useStyles();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: props.onDrop,
    accept: "image/*",
    multiple: true,
  });

  return (
    <>
      <div
        {...getRootProps({
          tabIndex:-1,
          onClick: e => e.stopPropagation(),
          onKeyDown: e => e.stopPropagation(),
        })}
        className={clsx(
          classes.root,
          isDragActive && classes.rootOnDrag,
          props.className,
        )}>
        <img className={classes.image} src={Image} alt="eye catching" />
        <Typography className={classes.text} align="center">
          Drag & Drop your image here
        </Typography>
      </div>
      <input {...getInputProps()} className={classes.fileInput} />
    </>
  );
};

type ContainerProps = {
  fileUpload: (files: File[]) => void;
};

const Container: React.FCX<ContainerProps> = function ({ fileUpload, className }) {
  const onDrop = React.useCallback((files: File[]) => fileUpload(files), [fileUpload]);

  return <Component className={className} onDrop={onDrop} />;
};

export { Container as DnDArea };
