//Main theme file (Combines all)

import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import components from "./components";
import breakpoints from "./breakpoints"; // Optional

const theme = createTheme({
  palette,
  typography,
  components,
  breakpoints,
});

export default theme;
