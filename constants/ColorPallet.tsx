export const COLORS = {
    primary: "#FF0000",
    secondary: "#00FF00",
    tertiary: "#0000FF",
    background: "#FFFFFF",
    text: "#000000",
    darkGray: "#333333",
    lightGray: "#CCCCCC",
    lighBlue: "#00BFFF",
    lightGray2: "#F2F2F2",
  } as const;

  export type ColorPallet = keyof typeof COLORS;