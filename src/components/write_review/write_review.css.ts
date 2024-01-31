import { style } from '@vanilla-extract/css'

export const container = style({
  padding: 10,
  display: "flex",
  flexDirection: "column"
});

export const controller = style({
  width: "100%",
  marginTop: "1rem",
});

export const controller_review = style({
  width: "100%",
  marginTop: "1rem",
  display: "flex",
  flexDirection: "column",
});

export const review = style({
  marginTop: "1rem",
  margin: "1rem 3rem 0rem 3rem"
});

export const input = style({
  display: "inline-flex",
  flexBasis: 1,
  flexGrow: 1,
});

export const label = style({
  width: "10rem",
  display: "inline-flex",
  justifyContent: "center",
  flexBasis: 1,
  flexGrow: 1,
});