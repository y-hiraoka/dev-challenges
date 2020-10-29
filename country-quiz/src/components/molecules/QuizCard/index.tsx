import React from "react";
import clsx from "clsx";
import { DefaultTheme, makeStyles } from "@material-ui/styles";
import picture from "./undraw_adventure_4hum 1.svg";
import { Card } from "../../atoms/Card";

type ContainerProps = { showPicture?: boolean };

type ComponentProps = {} & ContainerProps;

const useStyles = makeStyles<DefaultTheme, ComponentProps>(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    width: "40rem",
  },
  title: {
    color: theme.colors.background,
    fontSize: "3.2rem",
    fontWeight: "bold",
  },
  card: {
    width: "100%",
    minHeight: "10rem",
    marginTop: "1rem",
    padding: ({ showPicture }) => `${showPicture ? 6 : 2.2}rem 2.2rem 2.2rem 2.2rem`,
  },
  picture: {
    position: "absolute",
    top: "-1.7rem",
    right: 0,
    width: "14rem",
  },
}));

const Component: React.FCX<ComponentProps> = props => {
  const classes = useStyles(props);

  return (
    <div className={clsx(classes.root,props.className)}>
      <span className={classes.title}>COUNTRY QUIZ</span>
      <Card className={classes.card}>{props.children}</Card>
      {props.showPicture && (
        <img className={classes.picture} src={picture} alt="decoration" />
      )}
    </div>
  );
};

const Container: React.FCX<ContainerProps> = props => {
  return <Component {...props} />;
};

export { Container as QuizCard };
