import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles } from "@material-ui/styles";
import {darken, lighten} from "../../../utils/colorManipulator"

const useStyles = makeStyles(theme => createStyles({
  root: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    height: "4.1rem",
    padding: "1rem 3rem",
    borderRadius: ".8rem",
    fontSize: "1.5rem",
    transition: "0.3s"
  },
  fulfilled: {
    fontWeight: "bold",
    boxShadow: `0px 1px 4px -1px ${theme.colors.secondary}`,
    color: theme.colors.background,
    backgroundColor: theme.colors.secondary,
    "&:hover": {
      backgroundColor: darken(theme.colors.secondary, 0.1)
    },
    "&:active": {
      transform: "translate(0px, 1px)",
      boxShadow: "none",
    }
  },
  ghost: {
    fontWeight: "bold",
    color: theme.colors.text,
    border: `2px solid ${theme.colors.text}`,
    "&:hover": {
      backgroundColor: lighten(theme.colors.primary, 0.8)
    }
  }
}));

type ContainerProps = { variant: "fulfilled" | "ghost" } & React.ComponentProps<"button">;

type ComponentProps = {} & ContainerProps;

const Component: React.FCX<ComponentProps> = props => {
  const classes = useStyles();

  return <button {...props} className={clsx(classes.root, classes[props.variant], props.className)} />;
};

const Container: React.FCX<ContainerProps> = props => {
  return <Component {...props} />;
};

export { Container as Button };
