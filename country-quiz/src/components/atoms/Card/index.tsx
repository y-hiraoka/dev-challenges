import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.colors.background,
    borderRadius: "1.6rem",
    overflow:"hidden",
    boxShadow: "0px 8px 34px -15px rgba(10,10,10,0.1), 1px 3px 8px 0px rgba(0,0,0,0.2)"
  },
}));

type ComponentProps = React.ComponentProps<"div">;

const Component: React.FC<ComponentProps> = props => {
  const classes = useStyles();

  return <div {...props} className={clsx(classes.root, props.className)} />;
};

export { Component as Card };
