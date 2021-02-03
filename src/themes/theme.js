import { colors, createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"',
    fontSize: 30,
    h1: {
      // could customize the h1 variant as well
    }
  },
  palette: {
    //primary: { main: "#DF1B1B" }
  },
  color: {
    myBlack: "#111111",
    myBlue: "#0044AA",
    myGreen: "#00BB00",
    myOrange: "#DD8800",
    myYellow: "#FFDF44",
    myBrown: "#BB6611",
    myPink: "#FF9999",
    myPurple: "#AA00FF",
    myMagenta: "#FF00FF",
    myWhite: "#F0FFFA",
    red: "#FF4444",
    orange: "#FF8400",
    yellow: "#F0E900",
    lime: "#B0FF33",
    green: "#55FF77",
    cyan: "#22EEFF",
    blue: "#0088FF",
    purple: "#B400FF",
    skyGradient: "linear-gradient(to top, #FFC0DF, #FFEFEF)",
    conicGradient: "linear-gradient(to bottom right, red, orange, yellow, green, lime, aqua, blue, magenta) 1",
  },
});
