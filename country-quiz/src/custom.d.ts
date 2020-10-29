import React from "react";

declare module "react" {
  type FCX<P = {}> = React.FC<P & { className?: string }>;
}

import "@material-ui/styles";

declare module "@material-ui/styles" {
  interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      background: string;
      error: string;
      success: string;
    };
  }
}
