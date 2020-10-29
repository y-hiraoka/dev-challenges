import { Button, makeStyles } from "@material-ui/core";
import React from "react";

type ContainerProps = { text?: string };

type Props = {
  buttonText: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & ContainerProps;

const useStyles = makeStyles(theme=>({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.grey[100],
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: "4px",
    padding: "0.1rem",
    paddingLeft: ".8rem",
  },
  text: {
    maxWidth:"calc(100% - 6.4rem)",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  button: {
    marginLeft:".5rem",
    width: "6.4rem"
  },
}));

const Component: React.FCX<Props> = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.text}>{props.text}</span>
      <Button
        className={classes.button}
        onClick={props.onClick}
        variant="contained"
        color="primary"
        disableElevation>
        {props.buttonText}
      </Button>
    </div>
  );
};

const Container: React.FCX<ContainerProps> = ({text = "",...props}) => {
  const [buttonText, setButtonText] = React.useState("Copy");
  const [copying, setCopying] = React.useState(false);

  const onClick = React.useCallback(async () => {
    setCopying(true);

    await navigator.clipboard.writeText(text);

    setButtonText("Copied!");
    setCopying(false);
  }, [text]);

  React.useEffect(() => {
    if (!copying) {
      setTimeout(() => {
        setButtonText("Copy");
      }, 3000);
    }
  }, [copying]);

  return <Component {...props} text={text} onClick={onClick} buttonText={buttonText} />;
};

export { Container as TextCopyButton };
