import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => createStyles({
  root: {},
  flag: {
    width: "10rem",
  },
  text: {
    color: theme.colors.text,
    fontSize: "2rem",
    fontWeight: "bold"
  },
}));

type ContainerProps = {
  capitalName?: string;
  nationalFlag?: string;
};

type ComponentProps = {
  text: string;
} & ContainerProps;

const Component: React.FCX<ComponentProps> = props => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root,props.className)}>
      {props.nationalFlag && (
        <img className={classes.flag} src={props.nationalFlag} alt="national flag" />
      )}
      <p className={classes.text}>{props.text}</p>
    </div>
  );
};

const Container: React.FCX<ContainerProps> = ({ capitalName, ...props }) => {
  const text = capitalName
    ? `${capitalName} is the capital of`
    : "Which country does this flag belong to?";

  return <Component {...props} text={text} />;
};

export { Container as Question };
