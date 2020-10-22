import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    display: "none",
  },
});

type ComponentProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Component: React.FCX<ComponentProps> = function (props) {
  const classes = useStyles();

  return (
    <label className={props.className}>
      <input
        accept="image/*"
        className={classes.input}
        multiple
        type="file"
        onChange={props.onChange}
      />
      <Button variant="contained" color="primary" component="span">
        {props.children}
      </Button>
    </label>
  );
};

type ContainerProps = {
  fileUpload: (files: File[]) => void;
};

const Container: React.FCX<ContainerProps> = function ({
  className,
  fileUpload,
  children,
}) {
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.files && fileUpload([...e.target.files]);
    },
    [fileUpload],
  );

  return <Component className={className} onChange={onChange} children={children} />;
};

export { Container as UploadButton };
