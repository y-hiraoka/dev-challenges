import React from "react";
import clsx from "clsx";
import { CheckCircle } from "@material-ui/icons";
import { colors, makeStyles, Paper, Typography } from "@material-ui/core";
import { TextCopyButton } from "./TextCopyButton";

const useStyles = makeStyles({
  root: {
    padding: "3.3rem",
    display: "flex",
    gap: "2.5rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "40rem",
  },
  checkIcon: {
    color: colors.green[600],
    fontSize: "4rem",
    marginBottom: "-2rem",
  },
  text: {
    fontSize: "1.5rem",
  },
  image: {
    width: "100%",
    height: "25rem",
    borderRadius: "1.3rem",
    objectFit: "cover",
  },
});

type ContainerProps = {fileId:string};

type ComponentProps = {imageUrl:string} & ContainerProps;

const Component: React.FCX<ComponentProps> = function ({imageUrl,...props}) {
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.root, props.className)}>
      <CheckCircle className={classes.checkIcon} />
      <Typography className={classes.text}>Uploaded Successfully!</Typography>
      <img
        className={classes.image}
        src={imageUrl}
        alt="uploaded"
      />
      <TextCopyButton text={imageUrl} />
    </Paper>
  );
};

const Container:React.FCX<ContainerProps> = function(props) {
  const imageUrl = `${window.location.origin}/images/${props.fileId}`

  return <Component {...props} imageUrl={imageUrl} />
}

export { Container as UploadedCard };
