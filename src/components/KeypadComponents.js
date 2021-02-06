import React from "react";
import {
  Button,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { theme as myTheme } from "../themes/theme";

const myKeypadStyles = makeStyles((theme) => ({
  myInputText: {
    width: "6vw",
    height: "2.4vw",
    fontSize: "2vw",
    margin: "0.5vw",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      width: "12vw",
      height: "4.8vw",
      fontSize: "4vw",
    },
  },
  centerRow: {
    display: "flex",
    justifyContent: "center",
  },
  keypadKey: {
    width: "4vw",
    height: "4vw",
    fontSize: "2vw",
    minWidth: "1vw",
    [theme.breakpoints.down("sm")]: {
      width: "8vw",
      height: "8vw",
      fontSize: "4vw",
    },
  },
}));

export const MyKeypad = ({ handleClick, acceptDecimal }) => {
  const keypadTexts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "×", "÷"];
  const keypadColors = [myTheme.color.red, myTheme.color.orange, myTheme.color.yellow, myTheme.color.lime, myTheme.color.green, myTheme.color.cyan, myTheme.color.blue, myTheme.color.purple];
  var randomIndex = Math.floor(Math.random() * keypadColors.length);
  if (acceptDecimal) {
    keypadTexts.push(".");    
  }
  keypadTexts.push("<-");

  const classes = myKeypadStyles();

  return (
    <>
      <Grid className={classes.centerRow}>
        {
          keypadTexts.map((key, index) => {
            if (index < 8) {
              return <Button
                key={index}
                className={classes.keypadKey}
                value={key}
                variant="contained"                
                style={{
                  color: myTheme.color.myBlack,
                  backgroundColor: keypadColors[(index + randomIndex) % keypadColors.length]
                }}
                onClick={e => { handleClick(e, key) }}
              >{key}</Button>
            }
          })
        }
      </Grid>
      <Grid className={classes.centerRow}>
      {
          keypadTexts.map((key, index) => {
            if (index > 7) {
              return <Button
                key={index}
                className={classes.keypadKey}
                value={key}
                variant="contained"                
                style={{
                  color: myTheme.color.myBlack,
                  backgroundColor: keypadColors[(index + randomIndex + 3) % keypadColors.length]
                }}
                onClick={e => { handleClick(e, key) }}
              >{key}</Button>
              }
          })
        }
      </Grid>
    </>
  )
}

