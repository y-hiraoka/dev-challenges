import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { CheckIcon } from "./CheckIcon";
import { OffIcon } from "./OffIcon";

type Variant = "none" | "correct" | "incorrect";

type ContainerProps = {
  label: "A" | "B" | "C" | "D";
  variant?: Variant;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

type ComponentProps = { variant: Variant } & ContainerProps;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    padding: "1rem",
    height: "4.1rem",
    borderRadius: ".8rem",
    transition: ".3s",
    "&:hover": {
      "&:not([disabled])": {
        borderColor: theme.colors.secondary,
        color: theme.colors.background,
        backgroundColor: theme.colors.secondary,
      },
    },
  },
  none: {
    border: `1px solid ${theme.colors.primary}`,
    color: theme.colors.primary,
  },
  correct: {
    color: theme.colors.background,
    backgroundColor: theme.colors.success,
  },
  incorrect: {
    color: theme.colors.background,
    backgroundColor: theme.colors.error,
  },
  label: {
    width: "5rem",
    fontSize: "1.5rem",
  },
  text: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontSize: "1.3rem",
  },
  icon: {
    marginLeft: ".5rem",
    width: "2rem",
    color: "inherit",
    fill: "currentColor",
  },
}));

const Component: React.FCX<ComponentProps> = props => {
  const classes = useStyles(props);

  return (
    <button
      className={clsx(
        classes.root,
        props.variant === "none" && classes.none,
        props.variant === "correct" && classes.correct,
        props.variant === "incorrect" && classes.incorrect,
        props.className,
      )}
      onClick={props.onClick}
      disabled={props.disabled}>
      <span className={classes.label}>{props.label}</span>
      <span className={classes.text}>{props.children}</span>
      {props.variant === "correct" && <CheckIcon className={classes.icon} />}
      {props.variant === "incorrect" && <OffIcon className={classes.icon} />}
    </button>
  );
};

const Container: React.FCX<ContainerProps> = ({ variant = "none", ...props }) => {
  return <Component {...props} variant={variant} />;
};

export { Container as Choices };
