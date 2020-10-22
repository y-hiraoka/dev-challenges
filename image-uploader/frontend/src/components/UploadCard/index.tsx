import React from "react";
import clsx from "clsx";
import { Paper, Typography, makeStyles } from "@material-ui/core";
import { DnDArea } from "./DnDArea";
import { UploadButton } from "./UploadButton";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3.3em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "40rem",
    "& >:not(:first-child)": {
      marginTop: "2.5em",
    },
  },
  title: {
    fontSize: "2.5em",
  },
  subtitle: {
    fontSize: "1.3em",
  },
  or: {
    color: theme.palette.grey[500],
  },
}));

type ComponentProps = {
  uploadFile: (files: File[]) => void;
};

const Component: React.FCX<ComponentProps> = function (props) {
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.root, props.className)}>
      <Typography className={classes.title} variant="h1">
        Upload your image
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        File should be jpeg, png...
      </Typography>
      <DnDArea fileUpload={props.uploadFile} />
      <Typography className={classes.or}>or</Typography>
      <UploadButton fileUpload={props.uploadFile}>choose files</UploadButton>
    </Paper>
  );
};

export { Component as UploadCard };
