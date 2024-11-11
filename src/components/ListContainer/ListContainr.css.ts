import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const ListsContainer = style({
  height: "max-content",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  rowGap: vars.spacing.listSpacing,
  margin: vars.spacing.listSpacing,
});
