import { darken, lighten } from "polished";

export const colors = {
  accent: "#fc4e46",

  brand: {
    100: lighten(0.12, "#00a19a"),
    200: lighten(0.09, "#00a19a"),
    300: lighten(0.06, "#00a19a"),
    400: lighten(0.03, "#00a19a"),
    500: "#00a19a",
    600: darken(0.03, "#00a19a"),
    700: darken(0.06, "#00a19a"),
    800: darken(0.09, "#00a19a"),
    900: darken(0.12, "#00a19a")
  },

  brand100: lighten(0.12, "#00a19a"),
  brand200: lighten(0.09, "#00a19a"),
  brand300: lighten(0.06, "#00a19a"),
  brand400: lighten(0.03, "#00a19a"),
  brand500: "#00a19a",
  brand600: darken(0.03, "#00a19a"),
  brand700: darken(0.06, "#00a19a"),
  brand800: darken(0.09, "#00a19a"),
  brand900: darken(0.12, "#00a19a"),

  mono100: lighten(0.48, "#767269"),
  mono200: lighten(0.36, "#767269"),
  mono300: lighten(0.24, "#767269"),
  mono400: lighten(0.12, "#767269"),
  mono500: "#767269",
  mono600: darken(0.12, "#767269"),
  mono700: darken(0.24, "#767269"),
  mono800: darken(0.36, "#767269"),
  mono900: darken(0.48, "#767269"),

  flare100: "rgba(255,255,255,.07)",
  flare200: "rgba(255,255,255,.17375)",
  flare300: "rgba(255,255,255,.2775)",
  flare400: "rgba(255,255,255,.38125)",
  flare500: "rgba(255,255,255,.485)",
  flare600: "rgba(255,255,255,.58875)",
  flare700: "rgba(255,255,255,.6925)",
  flare800: "rgba(255,255,255,.79625)",
  flare900: "rgba(255,255,255,.9)",

  shadow100: "rgba(0,0,0,.07)",
  shadow200: "rgba(0,0,0,.17375)", // 0,07+((0,83/8)*1)
  shadow300: "rgba(0,0,0,.2775)",
  shadow400: "rgba(0,0,0,.38125)",
  shadow500: "rgba(0,0,0,.485)",
  shadow600: "rgba(0,0,0,.58875)",
  shadow700: "rgba(0,0,0,.6925)",
  shadow800: "rgba(0,0,0,.79625)",
  shadow900: "rgba(0,0,0,.9)"
};

export const color = colors;
